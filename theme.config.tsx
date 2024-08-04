import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useTheme } from 'next-themes'
const config: DocsThemeConfig = {

  useNextSeoProps() {
    return {
      titleTemplate: '%s – neocloud learning'
    }
  },
  darkMode: false,

  logo: <span>
    <svg
      id="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={200}
      height={170}
      viewBox="0, 0, 400,238.00178412132027"

    >
      <g id="svgg">
        <path
          id="path0"
          d="M340.333 99.916 L 340.333 104.498 341.042 105.009 C 341.431 105.289,341.938 105.659,342.167 105.830 C 342.396 106.001,343.071 106.497,343.667 106.934 C 344.262 107.370,345.489 108.286,346.392 108.969 L 348.034 110.212 348.559 109.932 C 348.847 109.779,349.468 109.375,349.938 109.035 C 350.408 108.695,351.625 107.854,352.642 107.167 C 353.659 106.479,354.493 105.869,354.496 105.810 C 354.498 105.751,353.450 104.926,352.166 103.976 C 350.882 103.027,348.763 101.457,347.457 100.487 C 346.152 99.518,344.055 97.962,342.799 97.029 C 341.543 96.096,340.474 95.333,340.424 95.333 C 340.374 95.333,340.333 97.395,340.333 99.916 M92.577 101.241 C 77.671 103.558,71.256 120.050,80.498 132.291 C 84.655 137.797,93.185 140.669,99.417 138.663 C 99.692 138.574,100.479 138.345,101.167 138.153 C 105.913 136.828,110.226 133.521,112.958 129.112 C 113.758 127.821,113.798 127.646,113.347 127.415 C 112.922 127.196,108.862 124.988,107.528 124.250 C 106.192 123.511,106.330 123.474,105.479 124.792 C 101.770 130.537,93.542 132.175,89.557 127.961 C 87.925 126.236,85.626 127.242,108.833 119.524 C 111.446 118.655,113.597 117.937,113.613 117.928 C 113.754 117.855,111.194 110.850,110.597 109.676 C 107.329 103.254,100.423 100.022,92.577 101.241 M55.353 101.336 C 52.812 101.692,50.282 102.919,47.875 104.964 L 47.000 105.707 47.000 103.770 L 47.000 101.833 41.833 101.833 L 36.667 101.833 36.667 120.250 L 36.667 138.667 41.750 138.667 L 46.833 138.667 46.833 126.508 L 46.833 114.349 45.708 114.299 L 44.583 114.250 45.115 113.917 C 46.015 113.352,49.572 110.940,49.775 110.756 C 49.880 110.661,50.743 110.076,51.692 109.456 C 52.640 108.837,53.567 108.227,53.750 108.101 C 54.052 107.894,54.216 107.962,55.474 108.811 C 56.239 109.328,57.147 109.938,57.492 110.167 C 57.838 110.396,59.346 111.408,60.843 112.417 L 63.565 114.250 62.324 114.333 L 61.083 114.417 61.041 126.542 L 60.998 138.667 66.006 138.667 L 71.013 138.667 70.957 125.625 C 70.896 111.481,70.962 112.513,69.959 109.798 C 67.807 103.969,61.721 100.444,55.353 101.336 M133.457 101.336 C 126.125 102.177,119.604 107.461,117.615 114.172 C 116.812 116.879,116.750 117.323,116.750 120.333 C 116.750 123.325,116.765 123.426,117.614 126.315 C 118.606 129.691,121.600 133.820,124.346 135.602 C 124.752 135.865,125.121 136.130,125.167 136.190 C 125.449 136.562,128.888 138.073,130.500 138.533 C 133.091 139.273,138.932 139.364,141.250 138.699 C 143.660 138.008,146.337 136.870,147.232 136.154 C 147.334 136.073,147.990 135.556,148.690 135.005 C 151.852 132.516,154.109 129.027,155.110 125.083 C 155.485 123.604,155.553 122.899,155.564 120.333 C 155.572 118.358,155.500 117.094,155.340 116.417 C 155.210 115.867,155.097 115.379,155.088 115.333 C 154.049 110.084,148.688 104.123,143.500 102.449 C 141.702 101.869,141.025 101.683,140.114 101.517 C 138.725 101.264,134.972 101.162,133.457 101.336 M361.615 110.131 C 360.716 110.746,358.428 112.328,356.532 113.646 C 354.635 114.964,352.483 116.448,351.750 116.945 C 349.904 118.195,348.298 119.311,348.000 119.550 C 347.796 119.713,345.981 120.959,343.945 122.333 C 343.741 122.471,342.845 123.095,341.954 123.721 L 340.333 124.858 340.333 129.762 C 340.333 132.460,340.394 134.667,340.467 134.667 C 340.633 134.667,341.523 134.084,344.000 132.357 C 346.335 130.728,349.049 128.852,351.167 127.404 C 352.037 126.808,352.880 126.212,353.040 126.080 C 353.199 125.948,353.643 125.642,354.027 125.400 C 354.410 125.158,354.805 124.894,354.904 124.813 C 355.164 124.601,357.497 122.973,358.079 122.597 C 358.352 122.421,358.652 122.213,358.746 122.135 C 358.840 122.056,359.779 121.401,360.833 120.678 C 361.887 119.955,362.884 119.263,363.047 119.140 C 363.322 118.933,363.341 118.552,363.297 113.964 L 363.250 109.012 361.615 110.131 M96.857 110.162 C 98.656 110.721,101.682 113.541,101.104 114.119 C 100.960 114.262,86.275 119.164,86.203 119.092 C 86.007 118.896,85.983 117.531,86.160 116.626 C 87.054 112.040,92.435 108.788,96.857 110.162 M138.518 110.421 C 146.576 112.509,147.592 125.871,139.967 129.463 C 134.479 132.047,128.498 128.756,127.417 122.557 C 126.047 114.700,131.601 108.629,138.518 110.421 "
          stroke="none"
          fill="#7494cc"
          fillRule="evenodd"
        />
        <path
          id="path1"
          d="M354.364 74.807 C 351.095 75.973,350.187 80.338,352.691 82.842 C 355.856 86.007,360.993 83.888,360.993 79.417 C 360.993 75.821,357.781 73.588,354.364 74.807 M357.085 75.424 C 361.680 76.760,360.988 83.446,356.250 83.492 C 351.397 83.538,350.563 76.890,355.236 75.415 C 356.137 75.130,356.071 75.130,357.085 75.424 M354.000 79.417 L 354.000 81.833 354.583 81.833 C 355.153 81.833,355.167 81.817,355.167 81.167 C 355.167 80.573,355.211 80.500,355.569 80.500 C 355.950 80.500,356.833 81.323,356.833 81.679 C 356.833 81.764,357.133 81.833,357.500 81.833 C 358.286 81.833,358.344 81.623,357.750 80.932 C 357.246 80.346,357.240 80.271,357.672 79.979 C 358.101 79.689,358.275 78.665,358.006 78.014 C 357.707 77.293,356.940 77.000,355.350 77.000 L 354.000 77.000 354.000 79.417 M356.663 78.330 C 357.249 78.915,356.818 79.493,355.792 79.497 L 355.167 79.500 355.167 78.750 C 355.167 77.877,355.981 77.648,356.663 78.330 M197.333 113.250 L 197.333 138.667 200.667 138.667 L 204.000 138.667 204.000 113.250 L 204.000 87.833 200.667 87.833 L 197.333 87.833 197.333 113.250 M320.167 97.740 L 320.167 107.646 319.042 106.510 C 315.715 103.151,311.078 101.645,305.639 102.156 C 300.257 102.663,296.551 104.538,293.053 108.525 C 292.636 109.001,291.000 111.655,291.000 111.856 C 291.000 111.930,290.812 112.401,290.582 112.904 C 287.551 119.530,289.559 129.699,294.833 134.438 C 299.096 138.268,306.907 140.224,311.751 138.675 C 315.528 137.468,316.950 136.692,318.939 134.751 L 320.333 133.391 320.333 136.029 L 320.333 138.667 323.583 138.667 L 326.833 138.667 326.833 113.250 L 326.833 87.833 323.500 87.833 L 320.167 87.833 320.167 97.740 M176.167 102.167 C 173.388 102.440,169.845 103.495,168.333 104.499 C 168.104 104.652,167.469 105.070,166.923 105.430 C 155.707 112.807,157.180 131.549,169.417 137.154 C 175.646 140.008,184.822 139.552,188.859 136.189 C 188.982 136.087,189.496 135.675,190.000 135.274 C 191.359 134.192,193.467 131.518,193.244 131.157 C 193.192 131.073,192.797 130.802,192.366 130.555 C 191.936 130.308,191.283 129.907,190.917 129.663 C 190.550 129.420,189.803 128.935,189.257 128.586 L 188.265 127.951 187.679 128.684 C 181.692 136.180,169.664 133.989,166.766 124.875 C 163.998 116.170,169.630 107.987,178.390 107.987 C 182.426 107.987,185.316 109.414,187.833 112.651 L 188.250 113.187 189.583 112.316 C 190.317 111.837,191.442 111.105,192.083 110.688 C 192.725 110.271,193.279 109.911,193.314 109.887 C 193.350 109.863,193.069 109.372,192.691 108.797 C 189.532 103.990,183.254 101.471,176.167 102.167 M225.835 102.182 C 213.569 103.362,206.202 115.245,210.319 127.207 C 210.621 128.086,211.785 130.511,211.980 130.667 C 212.037 130.712,212.363 131.166,212.706 131.675 C 213.455 132.788,215.270 134.616,216.417 135.412 C 216.875 135.730,217.335 136.063,217.439 136.151 C 218.779 137.284,223.296 138.751,226.288 139.024 C 239.078 140.193,248.631 130.156,246.761 117.512 C 245.260 107.359,236.758 101.131,225.835 102.182 M251.833 114.062 C 251.833 125.876,251.917 127.800,252.485 129.083 C 252.566 129.267,252.798 129.904,253.000 130.500 C 254.193 134.015,257.515 137.130,261.167 138.157 C 261.854 138.351,262.642 138.583,262.917 138.673 C 267.587 140.205,274.685 138.438,278.371 134.826 L 279.667 133.557 279.667 136.112 L 279.667 138.667 282.833 138.667 L 286.000 138.667 286.000 120.500 L 286.000 102.333 282.667 102.333 L 279.333 102.333 279.333 112.067 C 279.333 125.864,278.860 128.048,275.271 130.817 C 269.683 135.128,261.320 133.197,259.176 127.101 L 258.583 125.417 258.534 113.875 L 258.485 102.333 255.159 102.333 L 251.833 102.333 251.833 114.062 M231.537 108.406 C 236.994 109.942,240.038 114.226,240.070 120.417 C 240.084 123.128,240.049 123.356,239.289 125.583 C 235.597 136.403,219.208 135.325,216.482 124.083 C 214.063 114.106,222.090 105.747,231.537 108.406 M311.417 108.388 C 323.078 111.712,323.082 129.576,311.423 132.780 C 308.170 133.673,303.220 132.822,300.930 130.976 C 299.086 129.488,298.084 128.257,297.252 126.455 C 294.843 121.235,295.983 114.581,299.899 111.009 C 302.836 108.328,307.493 107.269,311.417 108.388 M141.500 158.500 L 141.500 163.833 145.417 163.833 L 149.333 163.833 149.333 162.917 L 149.333 162.000 146.417 162.000 L 143.500 162.000 143.500 160.667 L 143.500 159.333 146.000 159.333 L 148.500 159.333 148.500 158.500 L 148.500 157.667 146.000 157.667 L 143.500 157.667 143.500 156.333 L 143.500 155.000 146.333 155.000 L 149.167 155.000 149.167 154.083 L 149.167 153.167 145.333 153.167 L 141.500 153.167 141.500 158.500 M268.044 153.459 C 263.656 155.270,263.448 161.619,267.714 163.502 C 269.337 164.218,271.993 164.098,273.703 163.232 L 274.500 162.828 274.500 160.581 L 274.500 158.333 273.500 158.333 L 272.500 158.333 272.500 159.994 C 272.500 161.997,272.421 162.080,270.500 162.078 C 268.147 162.076,266.800 160.764,266.811 158.484 C 266.826 155.334,270.599 153.813,273.049 155.968 C 273.469 156.338,274.866 155.025,274.509 154.595 C 273.475 153.349,269.852 152.712,268.044 153.459 M122.000 158.583 L 122.000 163.833 125.750 163.833 L 129.500 163.833 129.500 162.917 L 129.500 162.000 126.833 162.000 L 124.167 162.000 124.167 157.667 L 124.167 153.333 123.083 153.333 L 122.000 153.333 122.000 158.583 M164.849 153.708 C 164.629 154.284,163.358 157.134,161.413 161.417 C 160.276 163.920,160.273 163.833,161.496 163.833 C 162.615 163.833,162.715 163.746,163.253 162.292 L 163.545 161.500 166.084 161.500 L 168.622 161.500 169.144 162.667 L 169.665 163.833 170.749 163.833 C 171.913 163.833,171.992 163.757,171.589 163.026 C 171.272 162.451,169.833 159.349,169.833 159.241 C 169.833 159.143,168.365 155.887,167.639 154.375 L 167.139 153.333 166.065 153.333 C 165.106 153.333,164.977 153.373,164.849 153.708 M183.667 158.583 L 183.667 163.833 184.667 163.833 L 185.667 163.833 185.667 162.333 L 185.667 160.833 186.984 160.833 L 188.300 160.833 188.646 161.419 C 188.836 161.742,189.070 162.098,189.166 162.211 C 189.261 162.324,189.563 162.735,189.837 163.125 L 190.335 163.833 191.418 163.833 C 192.013 163.833,192.500 163.782,192.500 163.720 C 192.500 163.561,190.634 160.779,190.423 160.622 C 190.312 160.540,190.351 160.434,190.533 160.327 C 193.230 158.735,192.952 154.771,190.059 153.562 C 189.665 153.398,188.691 153.333,186.589 153.333 L 183.667 153.333 183.667 158.583 M205.000 158.583 L 205.000 163.833 206.000 163.833 L 207.000 163.833 207.009 160.375 C 207.017 157.071,207.030 156.935,207.300 157.326 C 207.538 157.669,209.016 159.466,209.583 160.102 C 209.675 160.204,210.387 161.083,211.167 162.054 L 212.583 163.819 213.458 163.826 L 214.333 163.833 214.333 158.583 L 214.333 153.333 213.337 153.333 L 212.340 153.333 212.295 156.694 L 212.250 160.055 211.061 158.569 C 210.407 157.752,209.695 156.886,209.478 156.644 C 209.261 156.403,208.569 155.559,207.941 154.769 L 206.798 153.333 205.899 153.333 L 205.000 153.333 205.000 158.583 M227.667 158.583 L 227.667 163.833 228.667 163.833 L 229.667 163.833 229.667 158.583 L 229.667 153.333 228.667 153.333 L 227.667 153.333 227.667 158.583 M242.833 158.583 L 242.833 163.833 243.833 163.833 L 244.833 163.833 244.842 160.375 C 244.850 157.165,244.870 156.944,245.116 157.297 C 245.261 157.505,246.014 158.443,246.789 159.380 C 248.838 161.857,249.234 162.339,249.856 163.116 C 250.384 163.775,250.468 163.817,251.292 163.825 L 252.167 163.833 252.167 158.583 L 252.167 153.333 251.167 153.333 L 250.167 153.333 250.158 156.708 L 250.149 160.083 249.616 159.428 C 249.323 159.067,248.596 158.194,248.000 157.486 C 247.404 156.779,246.402 155.555,245.774 154.767 L 244.631 153.333 243.732 153.333 L 242.833 153.333 242.833 158.583 M188.804 155.257 C 189.807 155.555,190.202 156.034,190.226 156.984 C 190.265 158.453,189.444 159.039,187.208 159.138 L 185.667 159.206 185.667 157.103 L 185.667 155.000 186.803 155.000 C 187.428 155.000,188.328 155.115,188.804 155.257 M167.023 157.750 C 167.318 158.483,167.668 159.252,167.799 159.458 L 168.038 159.833 166.186 159.833 C 165.167 159.833,164.333 159.805,164.333 159.770 C 164.333 159.671,164.821 158.513,165.325 157.415 C 165.578 156.864,165.843 156.233,165.913 156.011 L 166.041 155.609 166.263 156.013 C 166.385 156.235,166.727 157.017,167.023 157.750 "
          stroke="none"
          fill="#040404"
          fillRule="evenodd"
        />
        <path id="path2" d="" stroke="none" fill="#3c989c" fillRule="evenodd" />
        <path id="path3" d="" stroke="none" fill="#3c5034" fillRule="evenodd" />
        <path id="path4" d="" stroke="none" fill="#400434" fillRule="evenodd" />
      </g>
    </svg>

  </span>,

  chat: {
    link: 'https://wa.me/+2349155555016 ',
    icon: (

      <svg fill="#7494cc" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 308 308" >
        <g id="XMLID_468_">
          <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
		c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
		c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
		c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
		c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
		c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
		c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
		c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
		c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
		C233.168,179.508,230.845,178.393,227.904,176.981z"/>
          <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
		c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
		c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
		 M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
		l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
		c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
		C276.546,215.678,222.799,268.994,156.734,268.994z"/>
        </g>

      </svg>

    )


  },

  footer: {
    text: (
      <span>
        Copyright {new Date().getFullYear()} ©{' '}
        <a href="https://techneo.ng" target="_blank">
          Neocloud Technologies Abuja NG.
        </a>
        .
      </span>
    )
  },

  search: {
    placeholder: 'Search',
    emptyResult: 'Not found. "No vex abeg" try another keyword',

  },

  banner: {
    key: '1.0-release',
    text: (
      <a href="#" target="_blank">
        🎉 Welcome to the all new Neocloud Learning Site.
      </a>
    )
  },


  sidebar: {

    toggleButton: true,
    defaultMenuCollapseLevel: 1


  },

  gitTimestamp: false,

  primaryHue: 229,

  toc: {
    float: true

  },

  nextThemes: {
    defaultTheme: "light"

  }
}

export default config
