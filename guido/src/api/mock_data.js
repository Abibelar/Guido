const LESSON_DATA = [
    {
        chapter: "Basics of Guitar Theory",
        lessons: [
            {
                id: "L001",
                number: 1,
                title: "What Is a Note?",
                description: "Learn what a musical note is and why it matters for guitar.",
                chunks: [
                    { type: "text", content: "A musical note is a symbol that represents a sound with a specific pitch and duration. In guitar playing, notes are the building blocks of melodies and harmonies." },
                    { type: "image", src: "/images/note_diagram.png", alt: "Diagram of a musical note" },
                    { type: "text", content: "Notes are named using the letters A through G, and they repeat in higher or lower pitches. Understanding notes is essential for reading music, playing scales, and forming chords on the guitar." }
                ]
            },
            {
                id: "L002",
                number: 2,
                title: "The Musical Alphabet",
                description: "Discover the 7 letter notes used in music.",
            },
            {
                id: "L003",
                number: 3,
                title: "Sharps and Flats",
                description: "Understand the idea of raising or lowering notes.",
            },
            {
                id: "L004",
                number: 4,
                title: "Whole Steps & Half Steps",
                description: "Learn the distance between notes.",
            },
            {
                id: "L005",
                number: 5,
                title: "What Is a Scale?",
                description: "Understand scales as patterns of whole and half steps.",
            }
        ]
    },
    {
        chapter: "Fretboard Fundamentals",
        lessons: [
            {
                id: "L006",
                number: 6,
                title: "The 6 Guitar Strings",
                description: "Learn the names of the open strings (E A D G B E).",
            },
            {
                id: "L007",
                number: 7,
                title: "Frets and Half Steps",
                description: "Understand how frets represent half-step jumps.",
            },
            {
                id: "L008",
                number: 8,
                title: "Finding Natural Notes",
                description: "Locate all natural notes on one string.",
            },
            {
                id: "L009",
                number: 9,
                title: "Repeating Patterns",
                description: "See how the same note shapes repeat up the neck.",
            },
            {
                id: "L010",
                number: 10,
                title: "Octaves on the Guitar",
                description: "Learn simple octave shapes on guitar.",
            }
        ]
    },
    {
        chapter: "Scales in Practice",
        lessons: [
            {
                id: "L011",
                number: 11,
                title: "Major Scale Formula",
                description: "Learn the formula: W W H W W W H.",
            },
            {
                id: "L012",
                number: 12,
                title: "C Major on One String",
                description: "Play a major scale using only single-string movement.",
            },
            {
                id: "L013",
                number: 13,
                title: "Box Shapes: What & Why",
                description: "Learn how scale shapes help navigate the fretboard.",
            },
            {
                id: "L014",
                number: 14,
                title: "First Major Scale Shape",
                description: "Memorize a simple 1-position major scale shape.",
            },
            {
                id: "L015",
                number: 15,
                title: "Minor Scale Formula",
                description: "Learn the natural minor formula: W H W W H W W.",
            }
        ]
    },
    {
        chapter: "Chords and Harmony",
        lessons: [
            {
                id: "L016",
                number: 16,
                title: "What Are Intervals?",
                description: "Learn how notes relate by distance.",
            },
            {
                id: "L017",
                number: 17,
                title: "Building a Major Chord",
                description: "Understand 1–3–5 harmony.",
            },
            {
                id: "L018",
                number: 18,
                title: "Building a Minor Chord",
                description: "Understand 1–♭3–5 harmony.",
            },
            {
                id: "L019",
                number: 19,
                title: "Chord Inversions",
                description: "Learn how chord tones can be rearranged.",
            },
            {
                id: "L020",
                number: 20,
                title: "Common Chord Progressions",
                description: "Explore I–IV–V and vi–IV–I–V patterns.",
            }
        ]
    },
    {
        chapter: "Rhythm and Timing",
        lessons: [
            {
                id: "L021",
                number: 21,
                title: "Beat & Tempo",
                description: "Learn what a beat is and how tempo is measured.",
            },
            {
                id: "L022",
                number: 22,
                title: "Quarter & Eighth Notes",
                description: "The most common note lengths for guitar.",
            },
            {
                id: "L023",
                number: 23,
                title: "Downstrokes & Upstrokes",
                description: "Master the basic motions of strumming.",
            },
            {
                id: "L024",
                number: 24,
                title: "Strumming Patterns",
                description: "Combine rhythm and motion into patterns.",
            },
            {
                id: "L025",
                number: 25,
                title: "Counting in Time",
                description: "Learn how to count while playing.",
            }
        ]
    }
];

export default LESSON_DATA;
