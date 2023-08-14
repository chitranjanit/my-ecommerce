type Product = {
    id: number
    title?: string
    description?: string
    price: string
    coverImage?: string
    discountRate?: string
}

function Product({
    id,
    title,
    discountRate,
    price,
    coverImage,
}: Product): JSX.Element {
    return (
        <>
            <div key={id} className="porodut w-full">
                {!coverImage && (
                    <div className="image-cover">
                        <div
                            style={{ backgroundColor: '#EDEEF3' }}
                            className="w-full h-13rem m-auto text-center p-28"
                        >
                            <svg
                                className="mx-auto"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <mask
                                    id="mask0_0_120"
                                    maskUnits="userSpaceOnUse"
                                    x="0"
                                    y="0"
                                    width="28"
                                    height="28"
                                >
                                    <rect
                                        width="27.8203"
                                        height="27.8203"
                                        fill="#D9D9D9"
                                    />
                                </mask>
                                <g mask="url(#mask0_0_120)">
                                    <path
                                        d="M5.79779 25.5017C4.83181 25.5017 4.01072 25.1636 3.33453 24.4874C2.65835 23.8112 2.32025 22.9902 2.32025 22.0242V5.79566C2.32025 4.82967 2.65835 4.00859 3.33453 3.3324C4.01072 2.65621 4.83181 2.31812 5.79779 2.31812H22.0263C22.9923 2.31812 23.8134 2.65621 24.4896 3.3324C25.1658 4.00859 25.5038 4.82967 25.5038 5.79566V22.0242C25.5038 22.9902 25.1658 23.8112 24.4896 24.4874C23.8134 25.1636 22.9923 25.5017 22.0263 25.5017H5.79779ZM5.79779 23.1834H22.0263C22.3547 23.1834 22.6299 23.0721 22.8516 22.8495C23.0742 22.6277 23.1855 22.3526 23.1855 22.0242V5.79566C23.1855 5.46722 23.0742 5.19172 22.8516 4.96916C22.6299 4.74737 22.3547 4.63648 22.0263 4.63648H5.79779C5.46936 4.63648 5.19386 4.74737 4.9713 4.96916C4.74951 5.19172 4.63861 5.46722 4.63861 5.79566V22.0242C4.63861 22.3526 4.74951 22.6277 4.9713 22.8495C5.19386 23.0721 5.46936 23.1834 5.79779 23.1834ZM6.95697 20.865L11.5937 16.2283L13.6802 18.2858L16.2304 15.0691L20.8671 20.865H6.95697ZM9.27533 11.5916C8.63778 11.5916 8.09219 11.3644 7.63857 10.91C7.18417 10.4563 6.95697 9.91074 6.95697 9.27319C6.95697 8.63565 7.18417 8.09006 7.63857 7.63643C8.09219 7.18203 8.63778 6.95483 9.27533 6.95483C9.91288 6.95483 10.4589 7.18203 10.9133 7.63643C11.3669 8.09006 11.5937 8.63565 11.5937 9.27319C11.5937 9.91074 11.3669 10.4563 10.9133 10.91C10.4589 11.3644 9.91288 11.5916 9.27533 11.5916Z"
                                        fill="#5A6B87"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                )}
                {coverImage && (
                    <div className="image-cover">
                        <img src={coverImage} alt={title} />
                    </div>
                )}
                <div className="product-desc pb-4 pt-2 px-4">
                    <h4 className="product-title font-nato uppercase text-base	font-normal	">
                        {title}
                    </h4>
                    <div className="pricing flex justify-between">
                        {discountRate && (
                            <span className="percentage text-red-600 text-lg font-medium">
                                {discountRate}%
                            </span>
                        )}
                        {price && (
                            <span className="product-priec text-lg font-medium">
                                ${price}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
