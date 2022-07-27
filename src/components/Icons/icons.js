
<<<<<<< HEAD
export const Favorite =({classNameIcon})=> (
    <svg className ={classNameIcon ? classNameIcon : ""} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.93424 18.5442L15.3153 27.3567C15.6398 27.6615 15.802 27.8139 16 27.8139C16.198 27.8139 16.3602 27.6615 16.6847 27.3567L26.0658 18.5442C28.674 16.094 28.9907 12.0621 26.7971 9.23467L26.3846 8.70304C23.7604 5.32069 18.4928 5.88794 16.6489 9.75145C16.3884 10.2972 15.6116 10.2972 15.3511 9.75145C13.5072 5.88794 8.23964 5.32069 5.6154 8.70304L5.20293 9.23467C3.00927 12.0621 3.32601 16.094 5.93424 18.5442Z" stroke="#272727" strokeWidth="2"/>
</svg>)
 

export const CaretDown = ({classNameIcon}) => (
    <svg className ={classNameIcon ? classNameIcon : ""} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="#3B3938"/>
</svg>

)

export const LogoIcon = ({classNameIcon})=>(
    <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10.3175L5.54307 2.22222L10.0375 10.3175H0Z" fill="#6E5544"/>
        <path d="M30.7116 0H9.13858L14.9813 10.6349H24.8689L30.7116 0Z" fill="#6E5544"/>
        <path d="M29.8127 10.3175L34.3071 2.38095L40 10.3175H29.8127Z" fill="#6E5544"/>
        <path d="M22.1723 40L27.5655 14.9206H40L22.1723 40Z" fill="#6E5544"/>
        <path d="M0 14.9206L17.5281 40L12.2846 14.9206H0Z" fill="#6E5544"/>
        <path d="M23.3708 14.9206H16.3296L19.9251 31.1111L23.3708 14.9206Z" fill="#6E5544"/>
    </svg>
)
export const SearchIcon = ({classNameIcon})=>(
    <svg className ={classNameIcon ? classNameIcon : ""} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#251C17" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="7" stroke="black" strokeOpacity="0.2" strokeWidth="1.5"/>
        <path d="M20 20L17 17" stroke="#251C17" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 20L17 17" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)

export const CartIcon = ({classNameIcon}) => (
    <svg className ={classNameIcon ? classNameIcon : ""} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5.33334 5.33325H7.77179C8.52174 5.33325 8.89672 5.33325 9.16798 5.54505C9.43924 5.75684 9.53019 6.12062 9.71208 6.84818L10.0199 8.07954C10.2759 9.1034 10.4039 9.61533 10.7169 9.97649C10.8866 10.1723 11.0928 10.3333 11.324 10.4505C11.7503 10.6666 12.278 10.6666 13.3333 10.6666V10.6666" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 22.6667H10.0679C9.45671 22.6667 9.15112 22.6667 8.93982 22.561C8.64666 22.4142 8.44405 22.1331 8.39754 21.8086C8.36402 21.5747 8.46065 21.2848 8.65392 20.705V20.705C8.86804 20.0626 8.97511 19.7414 9.15649 19.4916C9.40793 19.1454 9.76379 18.8889 10.1718 18.7598C10.4661 18.6667 10.8047 18.6667 11.4818 18.6667H18.6667" stroke="#272727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.1945 18.6667H14.0552C12.4368 18.6667 11.6277 18.6667 11.0682 18.1928C10.5087 17.7188 10.3757 16.9207 10.1096 15.3243L9.91554 14.1599C9.64529 12.5384 9.51016 11.7276 9.9595 11.1972C10.4089 10.6667 11.2308 10.6667 12.8747 10.6667H23.4306C24.881 10.6667 25.6062 10.6667 25.8993 11.141C26.1924 11.6153 25.8681 12.2639 25.2195 13.5612L23.7723 16.4556C23.2343 17.5314 22.9654 18.0694 22.4821 18.3681C21.9988 18.6667 21.3974 18.6667 20.1945 18.6667Z" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22.6667" cy="26.6666" r="1.33333" fill="#272727"/>
        <circle cx="12" cy="26.6666" r="1.33333" fill="#272727"/>
    </svg>
)
export const UserIcon = ({classNameIcon})=>(
    <svg className ={classNameIcon ? classNameIcon : ""} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="9.33333" r="5.33333" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.5292 22.9362C8.39099 20.1977 11.105 18.6667 13.9759 18.6667H18.0241C20.8949 18.6667 23.609 20.1977 24.4708 22.9362C24.8584 24.168 25.1852 25.5686 25.2944 27.0009C25.3364 27.5516 24.8856 28.0001 24.3333 28.0001H7.66665C7.11437 28.0001 6.6636 27.5516 6.70559 27.0009C6.81481 25.5686 7.14155 24.168 7.5292 22.9362Z" stroke="#272727" strokeWidth="2" strokeLinecap="round"/>
    </svg>
)
export const ArrowRightIcon = ({classNameIcon}) =>(
    <svg xmlns="http://www.w3.org/2000/svg" className ={classNameIcon ? classNameIcon : ""} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.07666 13.4867L5.25666 14.6667L11.9233 8.00004L5.25666 1.33337L4.07666 2.51337L9.56333 8.00004L4.07666 13.4867Z" fill="black"/>
    </svg>
)
export const FaceBook =({classNameIcon})=> (
    <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z" fill="#251C17"/>
        <path d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z" fill="black" fillOpacity="0.2"/>
    </svg>
  ) 

export const Instagram = ({classNameIcon}) => (
  <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
=======
export const FaceBook = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z"
      fill="#251C17"
    />
    <path
      d="M28.6895 22.2136L29.726 15.3883H23.242V10.9612C23.242 9.09345 24.1461 7.27184 27.0502 7.27184H30V1.46117C30 1.46117 27.3242 1 24.7671 1C19.4247 1 15.9361 4.26966 15.9361 10.1864V15.3883H10V22.2136H15.9361V38.7141C17.1279 38.9032 18.347 39 19.589 39C20.8311 39 22.0502 38.9032 23.242 38.7141V22.2136H28.6895Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

export const Instagram = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
>>>>>>> devuser
    <g clipPath="url(#clip0_711_864)">
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046ZM20 0C14.5693 0 13.8865 0.023819 11.7507 0.119095C9.62287 0.214371 8.16992 0.555776 6.89957 1.04803C5.58158 1.55617 4.47003 2.24692 3.35848 3.35848C2.24692 4.47003 1.56411 5.58952 1.04804 6.89956C0.555776 8.16991 0.214371 9.62287 0.119095 11.7586C0.023819 13.8865 0 14.5693 0 20C0 25.4307 0.023819 26.1135 0.119095 28.2493C0.214371 30.3771 0.555776 31.8301 1.04804 33.1084C1.55617 34.4264 2.24692 35.5379 3.35848 36.6495C4.47003 37.761 5.58952 38.4438 6.89957 38.9599C8.16992 39.4522 9.62287 39.7936 11.7586 39.8888C13.8944 39.9841 14.5693 40.0079 20.008 40.0079C25.4466 40.0079 26.1215 39.9841 28.2573 39.8888C30.3851 39.7936 31.8381 39.4522 33.1163 38.9599C34.4343 38.4518 35.5459 37.761 36.6574 36.6495C37.769 35.5379 38.4518 34.4184 38.9679 33.1084C39.4601 31.838 39.8015 30.3851 39.8968 28.2493C39.9921 26.1135 40.0159 25.4387 40.0159 20C40.0159 14.5613 39.9921 13.8865 39.8968 11.7507C39.8015 9.62287 39.4601 8.16991 38.9679 6.89162C38.4597 5.57364 37.769 4.46209 36.6574 3.35054C35.5459 2.23898 34.4264 1.55617 33.1163 1.0401C31.846 0.547836 30.393 0.206431 28.2573 0.111155C26.1136 0.023819 25.4307 0 20 0Z"
        fill="#251C17"
      />
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046ZM20 0C14.5693 0 13.8865 0.023819 11.7507 0.119095C9.62287 0.214371 8.16992 0.555776 6.89957 1.04803C5.58158 1.55617 4.47003 2.24692 3.35848 3.35848C2.24692 4.47003 1.56411 5.58952 1.04804 6.89956C0.555776 8.16991 0.214371 9.62287 0.119095 11.7586C0.023819 13.8865 0 14.5693 0 20C0 25.4307 0.023819 26.1135 0.119095 28.2493C0.214371 30.3771 0.555776 31.8301 1.04804 33.1084C1.55617 34.4264 2.24692 35.5379 3.35848 36.6495C4.47003 37.761 5.58952 38.4438 6.89957 38.9599C8.16992 39.4522 9.62287 39.7936 11.7586 39.8888C13.8944 39.9841 14.5693 40.0079 20.008 40.0079C25.4466 40.0079 26.1215 39.9841 28.2573 39.8888C30.3851 39.7936 31.8381 39.4522 33.1163 38.9599C34.4343 38.4518 35.5459 37.761 36.6574 36.6495C37.769 35.5379 38.4518 34.4184 38.9679 33.1084C39.4601 31.838 39.8015 30.3851 39.8968 28.2493C39.9921 26.1135 40.0159 25.4387 40.0159 20C40.0159 14.5613 39.9921 13.8865 39.8968 11.7507C39.8015 9.62287 39.4601 8.16991 38.9679 6.89162C38.4597 5.57364 37.769 4.46209 36.6574 3.35054C35.5459 2.23898 34.4264 1.55617 33.1163 1.0401C31.846 0.547836 30.393 0.206431 28.2573 0.111155C26.1136 0.023819 25.4307 0 20 0Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046Z"
        fill="#251C17"
      />
      <path
        d="M20 3.6046C25.3434 3.6046 25.9706 3.62842 28.0826 3.7237C30.0358 3.81104 31.0917 4.13656 31.7984 4.41445C32.7352 4.77967 33.4022 5.20842 34.1009 5.90711C34.7995 6.6058 35.2362 7.27273 35.5935 8.20961C35.8635 8.91624 36.1969 9.97221 36.2843 11.9254C36.3795 14.0373 36.4034 14.6645 36.4034 20.0079C36.4034 25.3513 36.3795 25.9786 36.2843 28.0905C36.1969 30.0437 35.8714 31.0996 35.5935 31.8063C35.2283 32.7432 34.7995 33.4101 34.1009 34.1088C33.4022 34.8075 32.7352 35.2441 31.7984 35.6014C31.0917 35.8714 30.0358 36.2048 28.0826 36.2922C25.9706 36.3875 25.3434 36.4113 20 36.4113C14.6566 36.4113 14.0294 36.3875 11.9174 36.2922C9.96428 36.2048 8.9083 35.8793 8.20167 35.6014C7.26479 35.2362 6.59786 34.8075 5.89917 34.1088C5.20048 33.4101 4.7638 32.7432 4.40651 31.8063C4.13657 31.0996 3.8031 30.0437 3.71576 28.0905C3.62049 25.9786 3.59667 25.3513 3.59667 20.0079C3.59667 14.6645 3.62049 14.0373 3.71576 11.9254C3.8031 9.97221 4.12863 8.91624 4.40651 8.20961C4.77174 7.27273 5.20048 6.6058 5.89917 5.90711C6.59786 5.20842 7.26479 4.77173 8.20167 4.41445C8.9083 4.1445 9.96428 3.81104 11.9174 3.7237C14.0294 3.62048 14.6646 3.6046 20 3.6046Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M20 9.73401C14.3311 9.73401 9.72607 14.3311 9.72607 20.0079C9.72607 25.6848 14.3231 30.2818 20 30.2818C25.6768 30.2818 30.2739 25.6848 30.2739 20.0079C30.2739 14.3311 25.6768 9.73401 20 9.73401ZM20 26.6693C16.316 26.6693 13.3307 23.684 13.3307 20C13.3307 16.316 16.316 13.3307 20 13.3307C23.684 13.3307 26.6693 16.316 26.6693 20C26.6693 23.684 23.684 26.6693 20 26.6693Z"
        fill="white"
      />
      <path
        d="M30.6788 11.7189C32.0031 11.7189 33.0766 10.6454 33.0766 9.32112C33.0766 7.99686 32.0031 6.92334 30.6788 6.92334C29.3546 6.92334 28.2811 7.99686 28.2811 9.32112C28.2811 10.6454 29.3546 11.7189 30.6788 11.7189Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_711_864">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const TikTok = ({classNameIcon}) => (
  <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="#251C17"
    />
    <path
      d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
      fill="black"
      fillOpacity="0.2"
    />
    <path
      d="M26.3811 6H21.4485V25.0724C21.4485 27.3449 19.5515 29.2116 17.1906 29.2116C14.8297 29.2116 12.9325 27.3449 12.9325 25.0724C12.9325 22.8406 14.7875 21.0145 17.0641 20.9333V16.1449C12.0472 16.2261 8 20.1623 8 25.0724C8 30.0232 12.1315 34 17.2327 34C22.3339 34 26.4654 29.9826 26.4654 25.0724V15.2927C28.3204 16.5913 30.5969 17.3623 33 17.4029V12.6145C29.2901 12.4928 26.3811 9.57101 26.3811 6Z"
      fill="white"
    />
  </svg>
);

export const Twitter = ({classNameIcon}) => (
  <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.095 11.9679C35.1105 12.3199 35.1105 12.6559 35.1105 13.0079C35.1259 23.68 27.2851 36 12.9464 36C8.7173 36 4.56539 34.736 1 32.368C1.61738 32.448 2.23477 32.48 2.85215 32.48C6.35581 32.48 9.76686 31.264 12.5297 29.008C9.19578 28.944 6.2632 26.688 5.24452 23.392C6.41755 23.632 7.62145 23.584 8.76361 23.248C5.13647 22.512 2.52803 19.1999 2.51259 15.3439C2.51259 15.3119 2.51259 15.2799 2.51259 15.2479C3.59301 15.8719 4.81235 16.2239 6.04712 16.2559C2.63607 13.8879 1.57108 9.16791 3.63932 5.4719C7.60601 10.5279 13.4403 13.5839 19.7067 13.9199C19.0739 11.1199 19.9383 8.17591 21.9602 6.1919C25.0934 3.13589 30.0325 3.2959 32.9959 6.54391C34.7401 6.1919 36.4224 5.5199 37.9504 4.5759C37.3639 6.44791 36.1446 8.03191 34.524 9.03991C36.0674 8.84791 37.58 8.41591 39 7.77591C37.9504 9.40792 36.6231 10.8159 35.095 11.9679Z"
      fill="#251C17"
    />
    <path
      d="M35.095 11.9679C35.1105 12.3199 35.1105 12.6559 35.1105 13.0079C35.1259 23.68 27.2851 36 12.9464 36C8.7173 36 4.56539 34.736 1 32.368C1.61738 32.448 2.23477 32.48 2.85215 32.48C6.35581 32.48 9.76686 31.264 12.5297 29.008C9.19578 28.944 6.2632 26.688 5.24452 23.392C6.41755 23.632 7.62145 23.584 8.76361 23.248C5.13647 22.512 2.52803 19.1999 2.51259 15.3439C2.51259 15.3119 2.51259 15.2799 2.51259 15.2479C3.59301 15.8719 4.81235 16.2239 6.04712 16.2559C2.63607 13.8879 1.57108 9.16791 3.63932 5.4719C7.60601 10.5279 13.4403 13.5839 19.7067 13.9199C19.0739 11.1199 19.9383 8.17591 21.9602 6.1919C25.0934 3.13589 30.0325 3.2959 32.9959 6.54391C34.7401 6.1919 36.4224 5.5199 37.9504 4.5759C37.3639 6.44791 36.1446 8.03191 34.524 9.03991C36.0674 8.84791 37.58 8.41591 39 7.77591C37.9504 9.40792 36.6231 10.8159 35.095 11.9679Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

export const Pinterest = ({classNameIcon}) => (
  <svg className ={classNameIcon ? classNameIcon : ""} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.9918 0C8.9346 0 0 8.95104 0 19.9918C0 28.4656 5.26532 35.7055 12.7026 38.6178C12.5216 37.0382 12.3735 34.603 12.7684 32.8754C13.1304 31.3122 15.1049 22.9371 15.1049 22.9371C15.1049 22.9371 14.5126 21.7359 14.5126 19.9753C14.5126 17.1946 16.125 15.1214 18.1324 15.1214C19.8437 15.1214 20.6664 16.4048 20.6664 17.935C20.6664 19.6462 19.5804 22.2131 19.0045 24.5989C18.5274 26.5899 20.0082 28.2188 21.9663 28.2188C25.5204 28.2188 28.2518 24.4673 28.2518 19.0704C28.2518 14.2822 24.8128 10.942 19.893 10.942C14.1999 10.942 10.8597 15.2036 10.8597 19.6133C10.8597 21.3246 11.5179 23.1674 12.3406 24.1711C12.5052 24.3686 12.5216 24.5496 12.4722 24.747C12.3242 25.3723 11.9786 26.738 11.9128 27.0177C11.8305 27.3797 11.6166 27.462 11.2382 27.281C8.77004 26.0962 7.22336 22.4434 7.22336 19.5146C7.22336 13.2127 11.7976 7.4208 20.436 7.4208C27.3632 7.4208 32.7602 12.357 32.7602 18.9716C32.7602 25.8659 28.4163 31.411 22.3941 31.411C20.3702 31.411 18.4615 30.3579 17.8198 29.1074C17.8198 29.1074 16.8161 32.9247 16.5693 33.8626C16.125 35.6068 14.9074 37.7787 14.0847 39.1115C15.9605 39.6874 17.935 40 20.0082 40C31.049 40 40 31.049 40 20.0082C39.9836 8.95104 31.0325 0 19.9918 0Z"
      fill="#251C17"
    />
    <path
      d="M19.9918 0C8.9346 0 0 8.95104 0 19.9918C0 28.4656 5.26532 35.7055 12.7026 38.6178C12.5216 37.0382 12.3735 34.603 12.7684 32.8754C13.1304 31.3122 15.1049 22.9371 15.1049 22.9371C15.1049 22.9371 14.5126 21.7359 14.5126 19.9753C14.5126 17.1946 16.125 15.1214 18.1324 15.1214C19.8437 15.1214 20.6664 16.4048 20.6664 17.935C20.6664 19.6462 19.5804 22.2131 19.0045 24.5989C18.5274 26.5899 20.0082 28.2188 21.9663 28.2188C25.5204 28.2188 28.2518 24.4673 28.2518 19.0704C28.2518 14.2822 24.8128 10.942 19.893 10.942C14.1999 10.942 10.8597 15.2036 10.8597 19.6133C10.8597 21.3246 11.5179 23.1674 12.3406 24.1711C12.5052 24.3686 12.5216 24.5496 12.4722 24.747C12.3242 25.3723 11.9786 26.738 11.9128 27.0177C11.8305 27.3797 11.6166 27.462 11.2382 27.281C8.77004 26.0962 7.22336 22.4434 7.22336 19.5146C7.22336 13.2127 11.7976 7.4208 20.436 7.4208C27.3632 7.4208 32.7602 12.357 32.7602 18.9716C32.7602 25.8659 28.4163 31.411 22.3941 31.411C20.3702 31.411 18.4615 30.3579 17.8198 29.1074C17.8198 29.1074 16.8161 32.9247 16.5693 33.8626C16.125 35.6068 14.9074 37.7787 14.0847 39.1115C15.9605 39.6874 17.935 40 20.0082 40C31.049 40 40 31.049 40 20.0082C39.9836 8.95104 31.0325 0 19.9918 0Z"
      fill="black"
      fillOpacity="0.2"
    />
  </svg>
);

<<<<<<< HEAD
=======
export const Cart = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.33334 5.33325H7.77179C8.52174 5.33325 8.89672 5.33325 9.16798 5.54505C9.43924 5.75684 9.53019 6.12062 9.71208 6.84818L10.0199 8.07954C10.2759 9.1034 10.4039 9.61533 10.7169 9.97649C10.8866 10.1723 11.0928 10.3333 11.324 10.4505C11.7503 10.6666 12.278 10.6666 13.3333 10.6666V10.6666"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 22.6667H10.0679C9.45671 22.6667 9.15112 22.6667 8.93982 22.561C8.64666 22.4142 8.44405 22.1331 8.39754 21.8086C8.36402 21.5747 8.46065 21.2848 8.65392 20.705V20.705C8.86804 20.0626 8.97511 19.7414 9.15649 19.4916C9.40793 19.1454 9.76379 18.8889 10.1718 18.7598C10.4661 18.6667 10.8047 18.6667 11.4818 18.6667H18.6667"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.1945 18.6667H14.0552C12.4368 18.6667 11.6277 18.6667 11.0682 18.1928C10.5087 17.7188 10.3757 16.9207 10.1096 15.3243L9.91554 14.1599C9.64529 12.5384 9.51016 11.7276 9.9595 11.1972C10.4089 10.6667 11.2308 10.6667 12.8747 10.6667H23.4306C24.881 10.6667 25.6062 10.6667 25.8993 11.141C26.1924 11.6153 25.8681 12.2639 25.2195 13.5612L23.7723 16.4556C23.2343 17.5314 22.9654 18.0694 22.4821 18.3681C21.9988 18.6667 21.3974 18.6667 20.1945 18.6667Z"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="22.6667" cy="26.6666" r="1.33333" fill="#272727" />
    <circle cx="12" cy="26.6666" r="1.33333" fill="#272727" />
  </svg>
);
export const User = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="9.33333" r="5.33333" stroke="#272727" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M7.5292 22.9362C8.39099 20.1977 11.105 18.6667 13.9759 18.6667H18.0241C20.8949 18.6667 23.609 20.1977 24.4708 22.9362C24.8584 24.168 25.1852 25.5686 25.2944 27.0009C25.3364 27.5516 24.8856 28.0001 24.3333 28.0001H7.66665C7.11437 28.0001 6.6636 27.5516 6.70559 27.0009C6.81481 25.5686 7.14155 24.168 7.5292 22.9362Z"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Search = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="#251C17" strokeWidth="1.5" />
    <circle cx="11" cy="11" r="7" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" />
    <path d="M20 20L17 17" stroke="#251C17" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 20L17 17" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Logo = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10.3175L5.54307 2.22222L10.0375 10.3175H0Z" fill="#6E5544" />
      <path d="M30.7116 0H9.13858L14.9813 10.6349H24.8689L30.7116 0Z" fill="#6E5544" />
      <path d="M29.8127 10.3175L34.3071 2.38095L40 10.3175H29.8127Z" fill="#6E5544" />
      <path d="M22.1723 40L27.5655 14.9206H40L22.1723 40Z" fill="#6E5544" />
      <path d="M0 14.9206L17.5281 40L12.2846 14.9206H0Z" fill="#6E5544" />
      <path d="M23.3708 14.9206H16.3296L19.9251 31.1111L23.3708 14.9206Z" fill="#6E5544" />
    </svg>
  );
};

export const FacebookColor = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
        fill="#1877F2"
      />
      <path
        d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z"
        fill="white"
      />
    </svg>
  );
};

export const GoogleColor = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.2 20.4546C39.2 19.0364 39.0727 17.6727 38.8364 16.3636H20V24.1H30.7636C30.3 26.6 28.8909 28.7182 26.7727 30.1364V35.1546H33.2364C37.0182 31.6727 39.2 26.5455 39.2 20.4546Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9999 39.9999C25.3999 39.9999 29.9272 38.209 33.2363 35.1545L26.7727 30.1363C24.9817 31.3363 22.6908 32.0454 19.9999 32.0454C14.7908 32.0454 10.3817 28.5272 8.80901 23.7999H2.1272V28.9817C5.41811 35.5181 12.1817 39.9999 19.9999 39.9999Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80909 23.8C8.40909 22.6 8.18182 21.3182 8.18182 20C8.18182 18.6818 8.40909 17.4 8.80909 16.2V11.0182H2.12727C0.772727 13.7182 0 16.7727 0 20C0 23.2273 0.772727 26.2818 2.12727 28.9818L8.80909 23.8Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9999 7.95455C22.9363 7.95455 25.5727 8.96364 27.6454 10.9455L33.3817 5.20909C29.9181 1.98182 25.3908 0 19.9999 0C12.1817 0 5.41811 4.48182 2.1272 11.0182L8.80901 16.2C10.3817 11.4727 14.7908 7.95455 19.9999 7.95455Z"
        fill="#EA4335"
      />
    </svg>
  );
};
>>>>>>> devuser
