export function MetalBarsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="0" y="11" width="16" height="4" stroke="black" fill="white" />
      <rect x="2" y="6" width="12" height="4" stroke="black" fill="white" />
      <rect x="4" y="0" width="8" height="4" stroke="black" fill="white" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M367.888 424.651V492.858L435.167 560.196L476.497 519.648L429.044 469.446V424.651C429.044 376.358 468.158 337.209 516.408 337.209C557.899 337.209 592.635 366.158 601.553 404.977H663.639C654.021 332.179 591.77 276 516.408 276C434.383 276 367.888 342.553 367.888 424.651ZM669.296 466.186H618.356L555.965 527.395H669.296C712.722 527.395 747.925 562.63 747.925 606.093C747.925 649.557 712.722 684.791 669.296 684.791H572.756L512.04 746H669.296C746.497 746 809.08 683.362 809.08 606.093C809.08 528.825 746.497 466.186 669.296 466.186ZM577.344 588.605L494.567 588.605L396.721 684.791H354.784C311.358 684.791 276.155 649.557 276.155 606.093C276.155 580.741 288.133 558.188 306.733 543.795V474.671C253.203 494.283 215 545.723 215 606.093C215 683.362 277.583 746 354.784 746H422.27L577.344 588.605Z"
        fill="#FF7C32"
      />
    </svg>
  );
}

export function QuotesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 1024 1024"
    >
      <rect
        x="128"
        y="128"
        width="768"
        height="896"
        rx="32"
        ry="32"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="32"
      />
      <line
        x1="256"
        y1="256"
        x2="768"
        y2="256"
        stroke="#000000"
        strokeWidth="32"
      />
      <line
        x1="256"
        y1="384"
        x2="768"
        y2="384"
        stroke="#000000"
        strokeWidth="32"
      />
      <line
        x1="256"
        y1="512"
        x2="512"
        y2="512"
        stroke="#000000"
        strokeWidth="32"
      />
      <rect x="256" y="640" width="192" height="64" fill="#000000" />
    </svg>
  );
}
export function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <rect
        x="64"
        y="256"
        width="896"
        height="512"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="32"
      />
      <path
        d="M64 256L512 576L960 256"
        fill="none"
        stroke="#000000"
        strokeWidth="32"
      />
    </svg>
  );
}
