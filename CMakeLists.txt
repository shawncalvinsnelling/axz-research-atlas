cmake_minimum_required(VERSION 3.10)
project(AXZResearchAtlas CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(axz_msq_fast_sweep src/cpp/axz_msq_fast_sweep.cpp)
target_compile_options(axz_msq_fast_sweep PRIVATE -O3)
