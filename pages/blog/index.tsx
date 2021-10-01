import Container from 'components/Container';
import { getAllFrontMatter } from 'lib/mdx';
import BlogPost from 'components/BlogPost';
import { FrontMatter } from 'lib/types';

const description = 'Discussion on my personal thoughts, projects and hobbies.';

export default function Blog({ posts }: { posts: FrontMatter[] }) {
	const sortedBlogPosts = posts
		.sort((a, b) =>
			Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
		);

	return (
		<Container
			title='Blog - Lav'
			description={description}
		>
			<div className='flex flex-col justify-center items-start max-w-4xl mx-auto'>
				<h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
					Blog
				</h1>
				<p className='text-gray-600 dark:text-gray-400'>
					{`${description} This list is sorted from latest to oldest, top to bottom.`}
				</p>
				{sortedBlogPosts.length ?
					<h3 className='font-bold text-2xl mt-10 md:mt-20 mb-6 md:text-4xl tracking-tight text-black dark:text-white'>
						All Posts
					</h3>
					: <p className='font-bold text-gray-600 dark:text-gray-400 mt-10'>
						No posts.
					</p>
				}
				{sortedBlogPosts.map(frontMatter => (
					<BlogPost key={frontMatter.title} {...frontMatter} />
				))}
			</div>
		</Container>
	);
}

export async function getStaticProps() {
	const posts = getAllFrontMatter();

	return { props: { posts } };
}