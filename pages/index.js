import '../style.scss'

const IndexPage = () => {
  return (
    <div>
      This should list all the cakes in small squares.
      <div className='feature-image'>
        <img className="svg-clipped" src="/everything-upside-down/static/cakes/pineapple-feature.jpg" alt="cakes" />
        <svg height="0" width="0">
              <defs>
                  <clipPath id="svgPath">
                      <path fill="#FFFFFF" stroke="black" strokeWidth="1.5794" strokeMiterlimit="10" d="M 27.518 187.115C 76.1327 143.141 120.342 43.3995 218.939 57.1914C 317.535 70.9832 316.168 -26.7593 373.898 7.22077C 431.628 41.2008 499.993 13.2173 519.743 89.1726C 539.493 165.128 607.857 223.094 578.992 275.063C 550.127 327.033 451.378 351.018 451.378 400.989C 451.378 450.96 440.743 500.93 373.898 524.916C 307.053 548.902 291.861 424.975 193.112 428.973C 94.3632 432.97 83.7288 452.958 27.518 412.982C -28.6928 373.005 16.8836 315.04 27.518 303.047C 38.1524 291.054 -21.0967 231.089 27.518 187.115Z" transform="translate(0.5 0.5) scale(1)"></path>
                  </clipPath>
              </defs>
          </svg>
        </div>
        <style jsx>{`
          .feature-image {
            width: 600px;
            height: 550px;
            position: fixed;
            right: 100px;
          }
        `}
        </style>
    </div>
  )
}

export default IndexPage
