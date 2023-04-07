import ContentLoader from "react-content-loader"

const PerfumeSkeleton = (props: any) => (
    <ContentLoader
        className="perfume-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="50" y="9" rx="54" ry="54" width="180" height="261" />
        <rect x="2" y="286" rx="11" ry="11" width="276" height="27" />
        <rect x="128" y="348" rx="0" ry="0" width="2" height="0" />
        <rect x="4" y="424" rx="13" ry="13" width="100" height="35" />
        <rect x="125" y="418" rx="19" ry="19" width="152" height="45" />
        <rect x="2" y="328" rx="11" ry="11" width="276" height="77" />
    </ContentLoader>
)


export default PerfumeSkeleton