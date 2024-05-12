
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import { Checkbox } from "../components/ui/checkbox"
import { Input } from "../components/ui/input"
import ReactStars from "react-rating-stars-component";
import { Separator } from "../components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";



function OurStore() {

  const [grid, setGrid] = useState(4);

  return (
    <>
    <Meta title={"Our Store"}/>
    <BreadCrumb title="Our Store"/>
    <Container class1="store-wrapper py-5 Home-wrapper-2">
      <div className="flex gap-4">
                {/* side bar store  */}
                <div className=" w-3/12">
                  <div className="filter-card mb-3 shadow-md">
                    <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                      Shop By Categories
                    </h3>
                    <div>
                      <ul className="my-6 ml-6 [&>li]:mt-2">
                        <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Watch</li>
                        <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">TV</li>
                        <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Camera</li>
                        <li className="break-words text-sm w-16 text-muted-foreground transition-colors hover:text-foreground cursor-pointer">Laptop</li>
                      </ul>
                    </div>
                  </div>

                  {/* filter  */}
                  <div className="filter-card mb-3  shadow-md">
                    <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                      Filter By
                    </h3>
                    
                    <div className="my-6 ml-6 space-y-2">
                      <h5 className="scroll-m-20 text-sm mb-2 font-semibold tracking-tight">Avilability</h5>

                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            in Stock(1)
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="term" />
                          <label
                            htmlFor="term"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            out of Stock(0)
                          </label>
                        </div>

                    </div>
                      {/* price  */}
                    <div className="price mt-4 pl-4">
                      <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">Price</h4>
                      <div className="flex gap-4 mt-3">
                        <div className="from">
                          <Input className="w-20" type="text" placeholder="From"/>
                        </div>
                        <div className="from">
                          <Input className="w-20" type="text" placeholder="To"/>
                        </div>
                      </div>
                    </div>

                      {/* colors */}
                    <div className="mt-4 ml-4">
                     <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">Colors</h4>
                        <div className="mt-3">
                          <Color/>
                        </div>
                    </div>

                    {/* size */}
                    <div className="mt-4 ml-4">
                      <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">Size</h4>
                      <div className=" space-y-2 mt-3">
                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="s" />
                          <label
                            htmlFor="s"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            S(2)
                          </label>
                      </div>

                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="m" />
                          <label
                            htmlFor="m"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            M(7)
                          </label>
                      </div>

                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="l" />
                          <label
                            htmlFor="l"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            L(0)
                          </label>
                      </div>

                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="xl" />
                          <label
                            htmlFor="xl"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            XL(4)
                          </label>
                      </div>

                      <div className="flex items-center space-x-2">
                          <Checkbox className="custom-checkbox data-[state=checked]:bg-[#febd69] " id="xxl" />
                          <label
                            htmlFor="xxl"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground leading-none "
                          >
                            XXL(3)
                          </label>
                      </div>
                      </div>
                    </div>
                  </div>
                  {/* product tags  */}
                  <div className="filter-card mb-3  shadow-md">
                    <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                      Product Tags
                    </h3>
                    <div className="flex flex-wrap gap-x-1 gap-y-2 mt-3">
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Headphones</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Laptop</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Mobile</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Oppo</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Speaker</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Tablet</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Wire</span>
                      <span className="border-transparent bg-red-100 text-foreground hover:bg-red/90 inline-flex items-center rounded-lg border px-2 py-0.5 text-xs font-semibold transition-colors cursor-pointer">Vivo</span>
                    </div>
                  </div>

                  {/* Random Product  */}
                  <div className="filter-card mb-3  shadow-md">
                    <h3 className="scroll-m-20 text-1xl font-semibold tracking-tight">
                      Random Product
                    </h3>
                    <div className="random-product">
                      <div className="flex w-64 mt-3">
                        <img className="w-20 h-20" src="/public/images/watch.jpg" alt="img" />
                        <div className=" ">
                          <h5 className=" text-[15px] font-semibold tracking-tight">Kids Headohones Bulk 10 Pack Multi Colored For...</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value="4"
                            edit="false"
                            activeColor="#ffd700"
                          />
                          <p className="text-sm font-semibold">$45.00</p>
                        </div>
                      </div>
                      <Separator className="my-4 w-64 h-[1.5px]" />
                      <div className="flex w-64 mt-3">
                        <img className="w-20 h-20" src="/public/images/smartwatche.png" alt="img" />
                        <div className=" ">
                          <h5 className=" text-[15px] font-semibold tracking-tight">Kids Headohones Bulk 10 Pack Multi Colored For...</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value="4"
                            edit="false"
                            activeColor="#ffd700"
                          />
                          <p className="text-sm font-semibold">$45.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* main store  */}
                <div className=" w-9/12">
                  {/* sort and grid  */}
                  <div className="filter-sort-grid rounded-md bg-white px-3 py-1 shadow-md mb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <p className="mb-0">Sort By</p>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Best selling" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="title-ascending">Alphabetically, A-Z</SelectItem>
                              <SelectItem value="title-descending">Alphabetically, Z-A</SelectItem>
                              <SelectItem value="price-ascending">Price, low to high</SelectItem>
                              <SelectItem value="price-descending">Price, low to high</SelectItem>
                              <SelectItem value="created-ascending">Date, old to new</SelectItem>
                              <SelectItem value="created-descending">Date, new to old</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="break-words text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer">21 products</p>
                        <div className="flex items-center gap-1">
                        <img onClick={() => setGrid(4)} src="/public/images/gr4.svg" className="block w-[28px] h-[28px] rounded-sm bg-gray-300 p-2" alt="4 grid icon" />
                        <img onClick={() => setGrid(3)} src="/public/images/gr3.svg" className="block w-[28px] h-[28px] rounded-sm bg-gray-300 p-2" alt="3 grid icon" />
                        <img onClick={() => setGrid(2)} src="/public/images/gr2.svg" className="block w-[28px] h-[28px] rounded-sm bg-gray-300 p-2" alt="2 grid icon" />
                        <img onClick={() => setGrid(1)} src="/public/images/gr.svg" className="block w-[28px] h-[28px] rounded-sm bg-gray-300 p-2" alt="1 grid icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* product list  */}
                  <div className={`product-list grid ${'grid-' + grid} gap-4 justify-center pb-4`}>
                      <ProductCard grid={grid} />
                      <ProductCard grid={grid} />
                      <ProductCard grid={grid} />
                      <ProductCard grid={grid} />
                  </div>

                </div>
            </div>
    </Container>
    </>
  )
}

export default OurStore