import Lottie from "lottie-react";
import notFound from '@assets/lottieFiles/notFound.json'
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[500px]">
        <Lottie animationData={notFound} />
      </div>
      <Link to='/' className="text-purple-400 underline" replace={true}>
        How about going back to safety?
      </Link>
    </div>
  )
}
