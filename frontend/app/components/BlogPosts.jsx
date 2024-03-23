const Blog = () => {

    const posts = [
        {
            title: "Deepfake Detection: A Comprehensive Guide",
            desc: "Learn about the latest advancements in deepfake detection techniques. From **lip-sync analysis** to **motion artifacts**, we explore the tools and strategies to combat synthetic media manipulation.",
            img: "https://www.mdpi.com/electronics/electronics-13-00095/article_deploy/html/images/electronics-13-00095-g001-550.jpg",
            authorLogo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Dr. Emily Chen",
            date: "Mar 23, 2024",
            href: "https://example.com/deepfake-detection-guide"
        },
        {
            title: "Global Efforts in Deepfake Detection Research",
            desc: "Discover how researchers worldwide are collaborating to tackle the deepfake challenge. We delve into datasets, benchmark models, and real-world case studies.",
            img: "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-11/newsroom-deepfake-feat.jpg",
            authorLogo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Prof. Alex Rodriguez",
            date: "Mar 24, 2024",
            href: "https://example.com/global-deepfake-research"
        },
        {
            title: "Spotting Deepfakes: A User's Guide",
            desc: "Practical tips for identifying deepfakes in everyday media. Learn to distinguish between real and manipulated content using visual cues and AI-powered tools.",
            img: "https://i.insider.com/600afbd35c82bc0018f9813b?width=1136&format=jpeg",
            authorLogo: "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Dr. Sarah Johnson",
            date: "Mar 25, 2024",
            href: "https://example.com/spotting-deepfakes-guide"
        },
        {
            title: "Deepfake Detection Techniques: Unmasking Synthetic Faces",
            desc: "Dive into the world of deepfake detection techniques. From **lip-sync analysis** to **motion artifacts**, we explore the cutting-edge methods used to identify manipulated videos.",
            img: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorLogo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Dr. Sophia Lee",
            date: "Mar 26, 2024",
            href: "https://example.com/deepfake-detection-techniques"
        },
        {
            title: "Ethical Implications of Deepfake Detection Algorithms",
            desc: "Delve into the ethical dilemmas surrounding deepfake detection. We discuss **privacy**, **misidentification**, and the impact on **media trust**.",
            img: "https://images.pexels.com/photos/18548430/pexels-photo-18548430/free-photo-of-a-typewriter-with-the-word-deepfake-on-it.jpeg?auto=format%2Ccompress&fm=webp&fit=crop&crop=faces%2Cedges&w=1200&h=675&q=60&cs=tinysrgb",
            authorLogo: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Prof. David Patel",
            date: "Mar 27, 2024",
            href: "https://example.com/ethical-deepfake-detection"
        },
        {
            title: "Real vs. Fake: A Visual Journey Through Deepfake Examples",
            desc: "Explore real-world examples of deepfakes and learn how to spot them. We dissect videos featuring **celebrities**, **politicians**, and even **pets**!",
            img: "https://www.researchgate.net/profile/Hina-Fatima-Shahzad/publication/361422044/figure/fig3/AS:1169087547875330@1655743600674/Examples-of-original-and-deepfake-videos.ppm",
            authorLogo: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            authorName: "Dr. Alex Kim",
            date: "Mar 28, 2024",
            href: "https://example.com/real-vs-fake-deepfakes"
        }
        // Add more posts as needed...
    ];
    
    
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Read Our Blogs
                </h1>
                <p className="mt-3 text-gray-500">
                    The News on Deep Fakes. Updates every Hour.
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div>
                                    <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default Blog;
