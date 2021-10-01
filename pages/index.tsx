import Container from 'components/Container';
import Project from 'components/Project';

export default function Home() {
	return (
		<Container>
			<div className='flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-16'>
					<h1 className='font-bold text-3xl md:text-5xl tracking-tight'>
						Hi. I&apos;m Lav.
					</h1>
					<p className='prose dark:prose-dark text-gray-600 dark:text-gray-400 mt-2 max-w-none w-full'>
						I&apos;m an Australian student, badminton player and a hobby software developer.
						When I&apos;m not off at school or smashing shuttles on the court, I&apos;m exploring the worldwide web
						and creating all sorts of stuff.
					</p>

					<button>
						<a
							href='mailto:lavyag01@gmail.com'
							className='rounded-md block mt-10 pb-2 pl-3 pr-3 pt-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-900'
						>
							<p>Get in Touch</p>
						</a>
					</button>

				<h2 className='font-bold text-2xl md:text-4xl tracking-tight mt-20 mb-6'>
					Projects
				</h2>
				<Project
					title='Wiki Utilities'
					description='Discord bot for taking administrative actions on a wiki through Discord. Delete, protect, edit pages.'
					href='https://github.com/lavgup/wiki-utilities'
					tag='bot'
				/>
				<Project
					title='mediawiki.js'
					description='A simplistic client library in TypeScript for the MediaWiki API, compiled for use in Node programs.'
					href='https://github.com/lavgup/mediawiki.js'
					tag='wrapper'
				/>
				<Project
					title='alexflipnote.go'
					description='A modern and fast wrapper for the AlexFlipnote API in Go. Includes easy token authentication.'
					href='https://github.com/lavgup/alexflipnote.go'
					tag='wrapper'
				/>
			</div>
		</Container>
	);
}