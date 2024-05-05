import ReactStars from "react-rating-stars-component";
import { Badge } from "./ui/badge";
import { Progress } from "../components/ui/progress"
import { useState } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";



function SpecialProducts() {
    const [progress, setPregress] = useState(65)
  return (
    <div className=" w-1/3">
        <div className="specail-product-card">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/public/images/watch.jpg" alt="watch" />
                </div>
                <div className="specail-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">Computers & LaptopComputers & Laptop</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit="false"
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className="text-red-500">$75.41</span>&nbsp;<strike>$82.56</strike>
                    </p>
                    <div className="discount-till flex gap-3 items-center">
                        <p>
                            <b className=" text-xs">5 days</b>
                        </p>
                        <div className="flex gap-2">
                            <Badge variant="destructive">4</Badge>:
                            <Badge variant="destructive">33</Badge>:
                            <Badge variant="destructive">23</Badge>
                        </div>
                    </div>
                    <div className="prod-count mt-2">
                            <p className="text-sm">Products: 5</p>
                            <Progress value={progress}  className="w-[60%] text-green-600" />
                    </div>
                    <div className="my-3">
                     <Link  className={buttonVariants({ variant: "outline" })}>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts