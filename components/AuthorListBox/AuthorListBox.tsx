import {useState, Fragment} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import * as d3 from "d3";



// const authors = [
//     {id: 0, author: 'Sara Coleridge', title: 'Phantasmion'},
//     {
//         id: 1,
//         author: 'Robert Browning',
//         title: 'The Pied Piper of Hamelin'
//     },
//     {
//         id: 2,
//         author: 'John Ruskin',
//         title: 'The King of the Golden River'
//     },
//     {
//         id: 3,
//         author: 'William Makepeace Thackeray',
//         title: 'The Rose and the Ring'
//     },
//     {id: 4, author: 'Christina Rossetti', title: 'Goblin Market'},
//     {id: 5, author: 'Charles Dickens', title: 'The Magic Fishbone'},
//     {
//         id: 6,
//         author: 'Dinah McCraik',
//         title: 'The Little Lame Prince and His Traveling Cloak'
//     },
//     {id: 7, author: 'Juliana Horatia Ewing', title: "I Won't"},
//     {
//         id: 8,
//         author: 'Juliana Horatia Ewing',
//         title: 'Good Luck Is Better Than Gold'
//     },
//     {
//         id: 9,
//         author: 'Juliana Horatia Ewing',
//         title: 'Kind William and the Water Sprite'
//     },
//     {id: 10, author: 'Juliana Horatia Ewing', title: 'Knave and Fool'},
//     {id: 11, author: 'Juliana Horatia Ewing', title: "Murdoch's Rath"},
//     {
//         id: 12,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Cobbler and the Ghosts'
//     },
//     {
//         id: 13,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Fiddler in the Fairy Ring'
//     },
//     {
//         id: 14,
//         author: 'Juliana Horatia Ewing',
//         title: "The First Wife's Wedding Ring"
//     },
//     {
//         id: 15,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Hillman and the Housewife'
//     },
//     {
//         id: 16,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Laird and the Man of Peace'
//     },
//     {
//         id: 17,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Little Darner'
//     },
//     {id: 18, author: 'Juliana Horatia Ewing', title: 'The Magic Jar'},
//     {
//         id: 19,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Magician Turned Mischief-Maker'
//     },
//     {
//         id: 20,
//         author: 'Juliana Horatia Ewing',
//         title: "The Magicians' Gifts"
//     },
//     {
//         id: 21,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Neck, A Legend of Lake'
//     },
//     {
//         id: 22,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Nix in Mischief'
//     },
//     {
//         id: 23,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Ogre Courting'
//     },
//     {
//         id: 24,
//         author: 'Juliana Horatia Ewing',
//         title: 'The Widows and the Strangers'
//     },
//     {id: 25, author: 'Juliana Horatia Ewing', title: 'Under the Sun'},
//     {
//         id: 26,
//         author: 'William Allingham',
//         title: 'The Fairies (A Poem)'
//     },
//     {
//         id: 27,
//         author: 'Mary De Morgan',
//         title: 'The Bread of Discontent'
//     },
//     {
//         id: 28,
//         author: 'Mary De Morgan',
//         title: 'The Heart of Princess Joan'
//     },
//     {
//         id: 29,
//         author: 'Mary De Morgan',
//         title: 'The Necklace of Princess Fiorimonde'
//     },
//     {id: 30, author: 'Mary De Morgan', title: "The Pedlar's Pack"},
//     {id: 31, author: 'Mary De Morgan', title: 'The Three Clever Kings'},
//     {
//         id: 32,
//         author: 'Mary De Morgan',
//         title: 'The Wanderings of Arasmon'
//     },
//     {id: 33, author: 'Mary De Morgan', title: 'The Wise Princess'},
//     {id: 34, author: 'George MacDonald', title: "The Giant's Heart"},
//     {id: 35, author: 'George MacDonald', title: 'The Golden Key'},
//     {id: 36, author: 'George MacDonald', title: 'The Light Princess'},
//     {id: 37, author: 'Oscar Wilde', title: 'The Devoted Friend'},
//     {id: 38, author: 'Oscar Wilde', title: 'The Happy Prince'},
//     {
//         id: 39,
//         author: 'Oscar Wilde',
//         title: 'The Nightingale and the Rose'
//     },
//     {id: 40, author: 'Oscar Wilde', title: 'The Remarkable Rocket'},
//     {id: 41, author: 'Oscar Wilde', title: 'The Selfish Giant'},
//     {id: 42, author: 'Andrew Lang', title: 'Prince Prigio'},
//     {id: 43, author: 'Ford Madox Ford', title: 'The Brown Owl'},
//     {id: 44, author: 'Oscar Wilde', title: 'The Birthday of the Infanta'},
//     {
//         id: 45,
//         author: 'Oscar Wilde',
//         title: 'The Fisherman and His Soul'
//     },
//     {id: 46, author: 'Oscar Wilde', title: 'The Star-Child'},
//     {id: 47, author: 'Oscar Wilde', title: 'The Young King'},
//     {
//         id: 48,
//         author: 'Andrew Lang',
//         title: 'Prince Ricardo of Pantouflia'
//     },
//     {id: 49, author: 'Kenneth Grahame', title: 'The Reluctant Dragon'},
//     {id: 50, author: 'E. Nesbit', title: 'Kind Little Edmund'},
//     {id: 51, author: 'E. Nesbit', title: 'The Book of Beasts'},
//     {
//         id: 52,
//         author: 'E. Nesbit',
//         title: 'The Deliverers of Their Country'
//     },
//     {id: 53, author: 'E. Nesbit', title: 'The Dragon Tamers'},
//     {id: 54, author: 'E. Nesbit', title: 'The Fiery Dragon'},
//     {id: 55, author: 'E. Nesbit', title: 'The Ice Dragon'},
//     {
//         id: 56,
//         author: 'E. Nesbit',
//         title: 'The Island of the Nine Whirlpools'
//     },
//     {id: 57, author: 'E. Nesbit', title: 'Uncle James'},
//     {id: 58, author: 'E. Nesbit', title: 'Melisande'},
//     {id: 59, author: 'Rudyard Kipling', title: 'Dymchurch Flit'}
// ]

let authors = [
    { id: 0, name: 'All Authors', titles: [ ] },
    {
        id: 2,
        name: 'Robert Browning',
        titles: [ 'The Pied Piper of Hamelin' ]
    },
    {
        id: 3,
        name: 'John Ruskin',
        titles: [ 'The King of the Golden River' ]
    },
    {
        id: 4,
        name: 'William Makepeace Thackeray',
        titles: [ 'The Rose and the Ring' ]
    },
    { id: 6, name: 'Charles Dickens', titles: [ 'The Magic Fishbone' ] },
    {
        id: 7,
        name: 'Dinah McCraik',
        titles: [ 'The Little Lame Prince and His Traveling Cloak' ]
    },
    {
        id: 8,
        name: 'Juliana Horatia Ewing',
        titles: [
            "I Won't",
            'Good Luck Is Better Than Gold',
            'Kind William and the Water Sprite',
            'Knave and Fool',
            "Murdoch's Rath",
            'The Cobbler and the Ghosts',
            'The Fiddler in the Fairy Ring',
            "The First Wife's Wedding Ring",
            'The Hillman and the Housewife',
            'The Laird and the Man of Peace',
            'The Little Darner',
            'The Magic Jar',
            'The Magician Turned Mischief-Maker',
            "The Magicians' Gifts",
            'The Neck, A Legend of Lake',
            'The Nix in Mischief',
            'The Ogre Courting',
            'The Widows and the Strangers',
            'Under the Sun'
        ]
    },
    // {
    //     id: 10,
    //     name: 'Mary De Morgan',
    //     titles: [
    //         'The Bread of Discontent',
    //         'The Heart of Princess Joan',
    //         'The Necklace of Princess Fiorimonde',
    //         "The Pedlar's Pack",
    //         'The Three Clever Kings',
    //         'The Wanderings of Arasmon',
    //         'The Wise Princess'
    //     ]
    // },
    {
        id: 11,
        name: 'George MacDonald',
        titles: [ "The Giant's Heart", 'The Golden Key', 'The Light Princess' ]
    },
    {
        id: 12,
        name: 'Oscar Wilde',
        titles: [
            'The Devoted Friend',
            'The Happy Prince',
            'The Nightingale and the Rose',
            'The Remarkable Rocket',
            'The Selfish Giant',
            'The Birthday of the Infanta',
            'The Fisherman and His Soul',
            'The Star-Child',
            'The Young King'
        ]
    },
    {
        id: 13,
        name: 'Andrew Lang',
        titles: [ 'Prince Prigio', 'Prince Ricardo of Pantouflia' ]
    },
    { id: 14, name: 'Ford Madox Ford', titles: [ 'The Brown Owl' ] },
    {
        id: 15,
        name: 'Kenneth Grahame',
        titles: [ 'The Reluctant Dragon' ]
    },
    {
        id: 16,
        name: 'E. Nesbit',
        titles: [
            'Kind Little Edmund',
            'The Book of Beasts',
            'The Deliverers of Their Country',
            'The Dragon Tamers',
            'The Fiery Dragon',
            'The Ice Dragon',
            'The Island of the Nine Whirlpools',
            'Uncle James',
            'Melisande'
        ]
    },
    { id: 17, name: 'Rudyard Kipling', titles: [ 'Dymchurch Flit' ] }
]

authors.sort((a: {id: number, name: string, titles: string[]},b) => d3.ascending(a.name, b.name))


// TODO: this code transformed the data above
// let store = []
// authors.forEach(value => {
//     let filteredIndices = [];
//     // console.log(filteredIndices)
//     store.filter((v,i) => {
//         if (v.name === value.author) {
//             filteredIndices.push(i);
//         }
//         return v.name === value.author;
//     });
//     if (filteredIndices.length > 0) {
//         filteredIndices.forEach((v) => {
//             store[v].titles.push(value.title)
//         })
//     } else {
//         let titleCopy = value.title;
//         let authorCopy = value.author;
//         let {title:remove, ...rest} = value;
//         let {author:removeTwo, ...secondRest} =rest
//         store.push({...secondRest, name: authorCopy, id:store.length + 1, titles: [titleCopy]})
//     }
// })


export default function ComboBox({onChange, defaultSelectedValue}) {
    const [selected, setSelected] = useState(defaultSelectedValue)
    const [query, setQuery] = useState('')


    const filteredPeople =
        query === ''
            ? authors
            : authors.filter((author) =>
                // @ts-ignore
                author.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className="relative -top-5 left-1/2 -translate-x-1/2 sm:w-[23rem] w-[19rem] md:left-2 md:top-12 md:translate-x-0 font-change">
            {/* @ts-ignore */}
            <Combobox value={selected} by="id" onChange={e => {
                setSelected(e);
                onChange(e);
            }}>
                <div className="relative mt-1">
                    <div
                        className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 sm:text-sm text-xs leading-5 text-gray-900 focus:ring-0"
                            // @ts-ignore
                            displayValue={(author) => author.name}
                            onChange={(event) => setQuery(event.target.value)}
                            // @ts-ignore
                            spellcheck="false"
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options
                            className="text-xs absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((author) => (
                                    // @ts-ignore
                                    <Combobox.Option key={author.id}  className={({active}) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-darkBlue text-white' : 'text-gray-900'}`} value={author}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span
                            className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {/*  @ts-ignore */}
                          {author.name}
                        </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active ? 'text-white' : 'text-darkBlue'
                                                        }`}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
