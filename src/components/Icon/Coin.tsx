import { FC, SVGProps } from "react";

export const Coin: FC<SVGProps<any>> = (props) => (
    <svg viewBox="0 0 62 62" fill="none" {...props}>
        <mask id="mask0_2105_5191" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="62" height="62">
            <circle cx="30.7" cy="31.0996" r="30.5" fill="#F9E160" />
        </mask>
        <g mask="url(#mask0_2105_5191)">
            <circle cx="30.7" cy="31.0996" r="30.5" fill="#F9E160" />
            <g filter="url(#filter0_i_2105_5191)">
                <ellipse cx="30.7" cy="31.1" rx="25.3305" ry="25.3305" fill="#FE881C" fill-opacity="0.72" />
            </g>
            <g filter="url(#filter1_d_2105_5191)">
                <path d="M29.5303 48.158V44.7275C25.8416 44.448 22.9575 43.1267 20.878 40.7635L23.2917 37.333C24.9999 39.2134 27.0794 40.3442 29.5303 40.7254V33.369C28.3668 33.064 27.4013 32.7718 26.6338 32.4923C25.8664 32.1874 25.0618 31.7681 24.2201 31.2345C23.3784 30.6754 22.7347 29.9639 22.2891 29.1C21.8682 28.2106 21.6578 27.1687 21.6578 25.9744C21.6578 24.0178 22.3757 22.3534 23.8116 20.9812C25.2475 19.6091 27.1537 18.8213 29.5303 18.618V15.0732H32.501V18.6562C35.4965 18.9865 37.9845 20.13 39.965 22.0866L37.477 25.4027C36.1154 24.0305 34.4568 23.1411 32.501 22.7346V29.2905C33.417 29.5446 34.1968 29.786 34.8405 30.0147C35.4842 30.2434 36.1897 30.5738 36.9572 31.0058C37.7494 31.4123 38.3806 31.8697 38.851 32.3779C39.3214 32.8607 39.7175 33.496 40.0393 34.2837C40.3611 35.0715 40.5221 35.9608 40.5221 36.9519C40.5221 39.0355 39.8413 40.8016 38.4797 42.25C37.1428 43.673 35.15 44.4988 32.501 44.7275V48.158H29.5303ZM35.2118 39.5056C35.806 38.8704 36.1031 38.1589 36.1031 37.3711C36.1031 36.5834 35.7936 35.9481 35.1747 35.4653C34.5558 34.9571 33.6646 34.5251 32.501 34.1694V40.7635C33.7141 40.5602 34.6177 40.1409 35.2118 39.5056ZM26.1139 25.6695C26.1139 26.8892 27.2527 27.8294 29.5303 28.4901V22.544C28.4658 22.6456 27.6241 22.9887 27.0052 23.5731C26.411 24.1322 26.1139 24.831 26.1139 25.6695Z" fill="#FFEA7C" />
            </g>
            <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_2105_5191)">
                <ellipse cx="31.3187" cy="22.3827" rx="16.5966" ry="16.5966" fill="white" />
            </g>
        </g>
        <defs>
            <filter id="filter0_i_2105_5191" x="5.36951" y="5.76953" width="50.661" height="51.373" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feMorphology radius="0.711864" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2105_5191" />
                <feOffset dy="0.711864" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2105_5191" />
            </filter>
            <filter id="filter1_d_2105_5191" x="20.878" y="15.0732" width="19.644" height="33.7968" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.711864" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2105_5191" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2105_5191" result="shape" />
            </filter>
            <filter id="filter2_f_2105_5191" x="-2.36264" y="-11.2986" width="67.3627" height="67.3629" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="8.54237" result="effect1_foregroundBlur_2105_5191" />
            </filter>
        </defs>
    </svg>
)