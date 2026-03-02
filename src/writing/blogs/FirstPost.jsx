import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';

export default function FirstPost({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-16 px-8">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <div className="w-full max-w-2xl text-left pt-16">
                <Link
                    to="/writing"
                    className="inline-block underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair mb-8"
                >
                    &larr; back
                </Link>

                <h1 className="text-[3rem] m-0 mb-1 leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
                    first post
                </h1>
                <p className="text-[0.95rem] mb-4 opacity-70" style={{ fontFamily: "'Times New Roman', serif" }}>
                    ~ March 1, 2026
                </p>

                <div className='flex flex-col' style={{ fontFamily: "'IM Fell English', serif" }}>
                    <p className='italic text-[1.4rem] leading-relaxed m-0'>
                        "We find our voice through experimentation."
                        <span className="block text-[0.9rem] text-gray-500/80 mt-1 opacity-90 not-italic ml-[50%]">
                            — Rick Rubin <br /><br /><br />
                        </span>
                    </p>
                    <p>
                        Most of what I make starts as something I couldn't explain.<br />
                        This whole site included. <br />
                        <br />

                        If you are here then maybe you understand that feeling. Maybe you're building something you can't explain either.
                        But I feel like thats the fun of it all. Making something from a bunch of loose parts with no clear pattern.
                        You sit with them, turn them over, hold them up to the light; and eventually something starts to take shape. <br /> <br />

                        Then you start expirmenting with the idea: <br />
                        over, over, and over again. <br />
                        Until something finally clicks. <br />
                        Then you realize that those fragments were never fragments to begin with. <br /> <br />

                        I think about this a lot with my own stuff.
                        Every time I made something and thought: okay, that's not quite it.
                        Not because it was bad. Just because it didn't really speak to me yet.
                        So I'd try again, slightly differently.
                        Change one thing. See what happens.
                        <br /><br />

                        And slowly, without really noticing,
                        the gap between what I was making and what I actually meant
                        got smaller.
                        That's the only way I know how to explain it.
                        You don't find your voice by thinking about it.
                        You find it by experimenting over and over again until it
                        it sounds exactly like you. <br /> <br />

                        This blog is part of that for me.
                        I don't totally know what I'm doing here yet,
                        but I know what I'm curious about: coding, math, different cultures, and ethics. Not really much of an expert in any of those. Just waayyyy to curious about them.
                        <br /> <br />

                        So yeah, first post done. Not really sure what I was totatlly going for when I started writing this lol. <br />
                        But I guess thats kind of the point.
                        <br /><br />
                        <span className="block text-right mt-2 mr-4 opacity-80 text-[1.2rem]">
                            - nikhil c
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
