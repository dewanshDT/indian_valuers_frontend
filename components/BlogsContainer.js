import { urlObjectKeys } from "next/dist/shared/lib/utils"
import Image from "next/image"
import travel from '../public/Travel.png'

const BlogsContainer = () => {
    return (
        <div className="blogsContainer">
            <h3>
                featured bolgs
            </h3>
            <div className="grid">
                <div className="gridItem">
                    <Image src={travel} />
                    <div className="content">
                        <h6>Travel</h6>
                        <h5>Tibet travel tips before you visit Nepal</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsContainer
