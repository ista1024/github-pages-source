import { postSlugs, postForSlug } from "../../posts";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="w-full">
        <article className="prose max-w-none">
          <h1>{frontmatter.title}</h1>
          <p className="italic">{frontmatter.date}</p>
          <ReactMarkdown
            components={{
              code({ node, inline, className, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return (
                  <SyntaxHighlighter
                    style={nightOwl}
                    language={match[1]}
                    PreTag="div"
                    className="codeStyle"
                    showLineNumbers={false}
                    {...props}
                  />
                );
              },
            }}
          >
            {body}
          </ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
