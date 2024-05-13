//import hero from "../assets/appDownload.png"
 import hero from "../assets/hero.png"
// import hero from "../assets/landing.png"

function Hero() {
  return (
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

export default Hero