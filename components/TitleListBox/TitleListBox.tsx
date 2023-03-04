import {useState, Fragment} from 'react'
import {Combobox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'


const texts = [
    {id: 0, name: "All Texts", alt: "all_texts"},
    {id: 1, name: "Dymchurch Flit", alt: "dymchurch_flit"},
    {id: 2, name: "Kind Little Edmund", alt: "kind_little_edmund"},
    {id: 3, name: "Melisande", alt: "melisande"},
    {id: 4, name: "Murdoch's Rath", alt: "murdochs_rath"},
    {id: 5, name: "Prince Prigio", alt: "prince_prigio"},
    {id: 6, name: "Prince Ricardo of Pantouflia", alt: "prince_ricardo_of_pantouflia"},
    {id: 7, name: "The Birthday of the Infanta", alt: "the_birthday_of_the_infanta"},
    {id: 8, name: "The Brown Owl", alt: "the_brown_owl"},
    {id: 9, name: "The Deliverers of Their Country", alt: "the_deliverers_of_their_country"},
    {id: 10, name: "The Fiddler in the Fairy Ring", alt: "the_fiddler_in_the_fairy_ring"},
    {id: 11, name: "The Fiery Dragon", alt: "the_fiery_dragon"},
    {id: 12, name: "The Fisherman and his Soul", alt: "the_fisherman_and_his_soul"},
    {id: 13, name: "The Happy Prince", alt: "the_happy_prince"},
    {id: 14, name: "The Ice Dragon", alt: "the_ice_dragon"},
    {id: 15, name: "The Island of the Nine Whirlpools", alt: "the_island_of_the_nine_whirlpools"},
    {id: 17, name: "The King of the Golden River", alt: "the_king_of_the_golden_river"},
    {id: 18, name: "The Laird and the Man of Peace", alt: "the_laird_and_the_man_of_peace"},
    {id: 19, name: "The Light Princess", alt: "the_light_princess"},
    {id: 20, name: "The Little Lame Prince and his Traveling Cloak", alt: "the_little_lame_prince_and_his_travelling_cloak"},
    {id: 21, name: "The Magic Fishbone", alt: "the_magic_fishbone"},
    {id: 22, name: "The Nix in Mischief", alt: "the_nix_in_mischief"},
    {id: 23, name: "The Pied Piper of Hamelin", alt: "the_pied_piper_of_hamelin"},
    {id: 24, name: "The Reluctant Dragon", alt: "the_reluctant_dragon"},
    {id: 25, name: "The Remarkable Rocket", alt: "the_remarkable_rocket"},
    {id: 26, name: "The Rose and the Ring", alt: "the_rose_and_the_ring"},
    {id: 27, name: "The Star Child", alt: "the_star_child"},
    {id: 28, name: "The Young King", alt: "the_young_king"},
    {id: 29, name: "Uncle James", alt: "uncle_james"},
    {id: 30, name: "The Devoted Friend", alt: "the_devoted_friend"},
]

// const texts = [
//     'dymchurch_flit',
//     'kind_little_edmund',
//     'melisande',
//     'murdochs_rath',
//     'prince_prigio',
//     'prince_ricardo_of_pantouflia',
//     'the_birthday_of_the_infanta',
//     'the_brown_owl',
//     'the_deliverers_of_their_country',
//     'the_fiddler_in_the_fairy_ring',
//     'the_fiery_dragon',
//     'the_fisherman_and_his_soul',
//     'the_happy_prince',
//     'the_ice_dragon',
//     'the_island_of_the_nine_whirlpools',
//     'the_fisherman_and_his_soul',
//     'the_king_of_the_golden_river',
//     'the_laird_and_the_man_of_peace',
//     'the_light_princess',
//     'the_little_lame_prince_and_his_travelling_cloak',
//     'the_magic_fishbone',
//     'the_nix_in_mischief',
//     'the_pied_piper_of_hamelin',
//     'the_reluctant_dragon',
//     'the_remarkable_rocket',
//     'the_rose_and_the_ring',
//     'the_star_child',
//     'the_young_king',
//     'uncle_james'
// ]


export default function ComboBox({onChange, defaultSelectedValue}) {
    const [selected, setSelected] = useState(defaultSelectedValue)
    const [query, setQuery] = useState('')


    const filteredTexts =
        query === ''
            ? texts
            : texts.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    // @ts-ignore
    return (
        <div className="absolute -top-11 left-1/2 -translate-x-1/2 sm:w-[23rem] w-[19rem] md:left-2 md:top-12 md:translate-x-0 font-change">
            <Combobox value={selected} by="id" onChange={e => {
                setSelected(e);
                onChange(e)
            }}>
                <div className="relative mt-1">
                    <div
                        className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <Combobox.Input
                            className="text-xs w-full border-none py-2 pl-3 pr-10 sm:text-sm text-gray-900 focus:ring-0"
                            // @ts-ignore
                            displayValue={(person) => person.name}
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
                            className="text-xs absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredTexts.length === 0 && query !== '' ? (
                                <div className="relative cursor-pointer select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredTexts.map((text) => (
                                    <Combobox.Option
                                        key={text.id}
                                        className={({active}) =>
                                            `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-darkBlue text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={text}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span
                            className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {text.name}
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
