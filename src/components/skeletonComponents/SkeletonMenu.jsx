import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMenu = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={300}
        viewBox="0 0 300 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="100" cy="99" r="100" />
        <rect x="0" y="217" rx="4" ry="4" width="212" height="42" />
        <rect x="0" y="388" rx="0" ry="0" width="100" height="36" />
        <rect x="109" y="388" rx="0" ry="0" width="100" height="36" />
        <rect x="0" y="274" rx="0" ry="0" width="212" height="105" />
    </ContentLoader>
)

export default SkeletonMenu