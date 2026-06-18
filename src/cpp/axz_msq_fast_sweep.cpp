#include <algorithm>
#include <cmath>
#include <iostream>
#include <numeric>
#include <set>
#include <vector>

using i64 = long long;

static bool allowed_e_mod_240(int r) {
    return r == 1 || r == 25 || r == 49 || r == 121 || r == 145 || r == 169;
}

int main(int argc, char** argv) {
    i64 zmax = 100000;
    if (argc > 1) zmax = std::atoll(argv[1]);

    std::vector<std::vector<i64>> D((size_t)zmax + 1);

    for (i64 m = 2; m <= (i64)std::sqrt((long double)zmax) + 2; ++m) {
        i64 m2 = m*m;
        if (m2 + 1 > zmax) break;
        i64 nmax = std::min(m - 1, (i64)std::sqrt((long double)(zmax - m2)));
        for (i64 n = 1; n <= nmax; ++n) {
            if (((m - n) & 1LL) == 0) continue;
            if (std::gcd(m, n) != 1) continue;
            i64 p0 = m2 - n*n;
            i64 q0 = 2*m*n;
            i64 z0 = m2 + n*n;
            i64 d0 = 2*p0*q0;
            for (i64 k = 1, z = z0; z <= zmax; ++k, z += z0) {
                i64 d = d0*k*k;
                int emod = (int)((z % 240) * (z % 240) % 240);
                if (allowed_e_mod_240(emod) && d % 24 == 0) D[(size_t)z].push_back(d);
            }
        }
    }

    i64 centers = 0, pair_tests = 0, diamonds = 0;
    i64 max_d_count = 0;

    for (i64 z = 1; z <= zmax; ++z) {
        auto& L = D[(size_t)z];
        if (L.empty()) continue;
        std::sort(L.begin(), L.end());
        L.erase(std::unique(L.begin(), L.end()), L.end());
        centers++;
        if ((i64)L.size() > max_d_count) max_d_count = (i64)L.size();
        for (size_t i = 0; i < L.size(); ++i) {
            for (size_t j = i + 1; j < L.size(); ++j) {
                i64 a = L[i], b = L[j];
                pair_tests++;
                if (std::binary_search(L.begin(), L.end(), a+b) &&
                    std::binary_search(L.begin(), L.end(), b-a)) {
                    diamonds++;
                }
            }
        }
    }

    std::cout << "{"
              << "\"zmax\":" << zmax << ","
              << "\"centers_with_D\":" << centers << ","
              << "\"pair_tests\":" << pair_tests << ","
              << "\"additive_diamonds\":" << diamonds << ","
              << "\"max_difference_count\":" << max_d_count
              << "}\n";
    return 0;
}
