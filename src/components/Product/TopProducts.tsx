import useFetch from "@/utils/useFetch"
import ProductSlider from "./ProductSlider"

const TopProducts = () => {
  const { data, isLoading } = useFetch("/products", {
    populate: "*",
    filters: { isNew: true },
  })

  if (isLoading) return <p>loading...</p>
  // console.log(data)

  return (
    <div className=" mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  )
}

export default TopProducts
