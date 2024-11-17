export default function About() {
    return (
        <div className="py-6" id="about">
            <h2 className="text-2xl font-bold mb-6">Oliver Yun</h2>
            <div className="space-y-4 text-foreground-secondary">
                <p>
                    Hi, I&apos;m Oliver. I&apos;m a student at Carnegie Mellon University pursuing a B.S. in 
                    Artificial Intelligence + Statistics & Machine Learning.
                </p>
                
                <p>
                    I work as a Teaching Assistant for CMU&apos;s Principles of Imperative 
                    Computation course and serve as VP of Finance for the CMU Data Science Club.
                </p>

                <p>
                    My interests span from building efficient backend systems to the specific field
                    of multimodal learning. I enjoy tackling complex problems and creating 
                    solutions that make a meaningful impact.
                </p>

                <p>
                    Currently, I&apos;m working on implementing a CLIP-like model from scratch using
                    PyTorch. Through this project, I hope to learn more about methods in 
                    multimodal learning. My process is documented in my blog.
                </p>
            </div>
        </div>
    );
}