include(ExternalProject)
set(ZEROMQ_INSTALL_DIR ${PROJECT_SOURCE_DIR}/lib/zeromq)

ExternalProject_Add(zeroMQ
    GIT_REPOSITORY https://github.com/zeromq/libzmq.git
    GIT_TAG master
    CMAKE_ARGS
        -DCMAKE_INSTALL_PREFIX=${ZEROMQ_INSTALL_DIR}
        -DWITH_PERF_TOOL=OFF
        -DZMQ_BUILD_TESTS=OFF
        -DENABLE_CPACK=OFF
        -DBUILD_SHARED_LIBS=ON 
    INSTALL_DIR ${ZEROMQ_INSTALL_DIR}
)

set(ZEROMQ_INCLUDE_DIR      "${ZEROMQ_INSTALL_DIR}/include")
set(ZEROMQ_LIBRARY_DIRS     "${ZEROMQ_INSTALL_DIR}/lib/")
set(ZEROMQ_LINK_LIBRARIES   "${ZEROMQ_INSTALL_DIR}/lib/libzmq${CMAKE_SHARED_LIBRARY_SUFFIX}")
