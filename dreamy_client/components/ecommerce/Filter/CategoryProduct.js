import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>All</a>
                </li>
                <li onClick={(e) => selectCategory(e, "blackforest")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.png"
                            alt=""
                        />
                        Blackforest 
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.png"
                            alt=""
                        />
                       Redvelvet
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.jpg"
                            alt=""
                        />
                        CupCake{" "}
                    </a>
                    
                </li>                
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
