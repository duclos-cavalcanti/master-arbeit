terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = "4.51.0"
        }
    }
}

provider "google" {
    project = "multicast1"
    region  = "us-east4"
    zone    = "us-east4-a"
}

resource "google_storage_bucket" "bucket" {
    name     = "treedrop-nyu-systems"
    location = "US"

    lifecycle_rule {
        condition {
          age = 365
        }
        action {
          type = "Delete"
        }
    }
}

resource "google_storage_bucket_object" "my_object" {
    name   = "project.tar.gz"
    source = "./extract/project.tar.gz"
    bucket = google_storage_bucket.bucket.name
}

data "google_compute_network" "multicast-service" {
    name                    = "multicast-service"
}

data "google_compute_network" "multicast-management" {
    name                    = "multicast-management"
}

data "google_compute_subnetwork" "multicast-service-subnet" {
    name                     = "multicast-service"
    region                   = "us-east4"
}

data "google_compute_subnetwork" "multicast-management-subnet" {
    name                     = "multicast-management"
    region                   = "us-east4"
}

resource "google_compute_instance" "custom_instance" {
    name         = "vanilla-test"
    machine_type = var.machine
    zone         = "us-east4-c"

    tags = ["test"]

    metadata = {
        "startup-script" = templatefile("./scripts/start.sh", {
            ROLE         = "PROXY",
            CLOUD        = "GCP"
        })
    }

    network_interface {
        network     = data.google_compute_network.multicast-service.name
        subnetwork  = data.google_compute_subnetwork.multicast-service-subnet.name
        network_ip  = "10.0.1.0"
        nic_type    = "GVNIC"
        stack_type  = "IPV4_ONLY"
    }

    network_interface {
        network     = data.google_compute_network.multicast-management.name
        subnetwork  = data.google_compute_subnetwork.multicast-management-subnet.name
        network_ip  = "10.1.1.0"
        nic_type    = "GVNIC"
        stack_type  = "IPV4_ONLY"
    }

    boot_disk {
        auto_delete = true
        initialize_params {
            image = "projects/multicast1/global/images/${var.image}"
        }
    }

    service_account {
        email  = "multicast-service-vm@multicast1.iam.gserviceaccount.com"
        scopes = ["https://www.googleapis.com/auth/cloud-platform"]
    }
}
