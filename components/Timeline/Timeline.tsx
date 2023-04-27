import React, {useEffect} from 'react';
import classes from "./Timeline.module.css"
import Head from "next/head";
import Script from "next/script";


const texts = [
    {
        'Date': '1550-1553',
        'Event': 'Giovanni Francesco Straparola published',
        'Title of Literary Work': 'Le piacevoli notti (The Pleasant Nights)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    },
    {
        'Date': '1634-1636',
        'Event': 'Giambattista Basile published',
        'Title of Literary Work': 'Il Pentamerone, Lo cunto de li cunti (The Tale of Tales)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    },
    {
        'Date': '1697',
        'Event': 'Marie-Catherine d’Aulnoy published',
        'Title of Literary Work': 'Contes des fées (Tales of the Fairies)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1697',
        'Event': 'Charles Perrault published',
        'Title of Literary Work': 'Histoires ou contes du temps passé (Stories or Tales from Past Times)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1699',
        'Event': "D'Aulnoy's text first translated into English ",
        'Title of Literary Work': 'Tales of the Fairies',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1704-1705',
        'Event': 'Gabrielle-Suzanne Barbot de Villeneuve published in La Jeune Américaine et les contes marins (The Young American and Marine Tales)',
        'Title of Literary Work': 'La Belle et la Bête (Beauty and the Beast)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1704-1717',
        'Event': 'Antoine Galland’s work begins to circulate in Europe',
        'Title of Literary Work': 'Les milles et une nuits: contes arabes',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1729',
        'Event': "Perrault's text first translated into English by Robert Samber",
        'Title of Literary Work': 'Histoires ou contes du temps passé (Stories or Tales from Past Times)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1802 - 1803',
        'Event': 'An essay by Sir Walter Scott is published in Minstrelsy of the Scottish Border',
        'Title of Literary Work': '"On the Fairies of Popular Superstition"',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1805',
        'Event': "Wieland's work is translated, which inspired other fairy plays, ballets, and Weber’s opera",
        'Title of Literary Work': 'Oberon',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1811',
        'Event': 'Baron de la Motte Fouqué published; translated into English soon after',
        'Title of Literary Work': 'Undine',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1812',
        'Event': 'Brothers Grimm first published in Germany',
        'Title of Literary Work': 'Kinder- und Hausmärchen (German Popular Stories)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1823',
        'Event': 'Selection of the Brothers Grimm fairy tales published for the first time in England, translated into English by Edgar Taylor and illustrated by George Cruikshank ',
        'Title of Literary Work': 'Kinder- und Hausmärchen (German Popular Stories)',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1825',
        'Event': 'Thomas Crofton Croker, with the help of Thomas Keightley, published',
        'Title of Literary Work': 'Fairy Legends of South Ireland',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1828',
        'Event': 'Thomas Keightley published first edition, illustrated by W. H. Brooke (later republished in the 1970s as The World Guide to Gnomes, Fairies, Elves and Other Little People)',
        'Title of Literary Work': 'Fairy Mythology, Two Volumes',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1831',
        'Event': 'Joseph Ritson published',
        'Title of Literary Work': 'Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1832',
        'Event': 'Ballet first performed in London (based on a story by Charles Nodier called Trilby); most popular when danced by Pauline DeVernay in 1836',
        'Title of Literary Work': 'La Sylphide',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1834',
        'Event': 'Thomas Keightley published',
        'Title of Literary Work': 'Tales and Popular Fictions; their Resemblances and Transmissions from Country to Country',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1836',
        'Event': 'Anna Eliza Bray, the first Victorian female folklorist published',
        'Title of Literary Work': 'A Description of Devonshire Bordering on the Tamar and the Navy; its Natural History, Manners, Customs, Superstitions, Scenery…. ',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1837',
        'Event': 'Sara Coleridge published',
        'Title of Literary Work': 'Phantasmion',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1838 - 1840',
        'Event': 'Edward Lane’s version published serially',
        'Title of Literary Work': 'The Thousand and One Nights',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1840',
        'Event': 'Anna Letitia Barbauld, John Aiken',
        'Title of Literary Work': 'Evening at Home: The Juvenile Budget Opened',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1842',
        'Event': 'Robert Browning published',
        'Title of Literary Work': 'The Pied Piper of Hamelin',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1846',
        'Event': 'Hans Christian Andersen’s tales translated into English in 5 volumes',
        'Title of Literary Work': 'Collected Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1846',
        'Event': 'Edward Lear published',
        'Title of Literary Work': 'The Book of Nonsense',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1848',
        'Event': 'Giambattista Basile’s work translated into English',
        'Title of Literary Work': 'Il Pentamerone, Lo cunto de li cunti (The Tale of Tales)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1850',
        'Event': 'Thomas Keightely expanded edition published',
        'Title of Literary Work': 'Fairy Mythology',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1851',
        'Event': 'John Ruskin published (anonymously)',
        'Title of Literary Work': 'The King of the Golden River',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1854',
        'Event': 'William Makepeace Thackeray published',
        'Title of Literary Work': 'The Rose and the Ring',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1854',
        'Event': 'Anna Eliza Bray published',
        'Title of Literary Work': 'A Peep at the Pixies',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1859',
        'Event': "George Webbe Dasent translated Peter Christen Asbjørnsen's text into English",
        'Title of Literary Work': 'Popular Tales from the Norse',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1862',
        'Event': 'Christina Rossetti published',
        'Title of Literary Work': 'Goblin Market',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1865',
        'Event': 'Thomas Hood, illustrated by Gustave Doré',
        'Title of Literary Work': 'Fairy Realm: A Collection of the Favourite Old Tales Told in Verse',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1867',
        'Event': 'Charles Dickens published',
        'Title of Literary Work': 'The Magic Fishbone',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1875',
        'Event': 'Dinah Maria Mulock Craik published',
        'Title of Literary Work': 'The Little Lame Prince and His Traveling Cloak',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1877',
        'Event': "Villamaria's Fairy Tale book translated into English",
        'Title of Literary Work': 'Fairy Circles: Tales and Legends of Giants, Dwarfs, Fairies, Water-Sprites, and Hobgoblins',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1879',
        'Event': 'Maive Stokes anthologized and published',
        'Title of Literary Work': 'Indian Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1883',
        'Event': 'William Allingham published',
        'Title of Literary Work': 'The Fairies (A Poem)',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1885',
        'Event': 'Thomas Frederick Crane published and anthologized ',
        'Title of Literary Work': 'Italian Popular Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1886',
        'Event': 'Dinah Maria Mulock Craik anthologized and published',
        'Title of Literary Work': 'The Fairy Book: The Best Popular Fairy Stories Selected and Rendered Anew',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1886',
        'Event': 'Mary De Morgan published',
        'Title of Literary Work': 'The Necklace of Princess Fiorimonde and Other Stories',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1886',
        'Event': 'Hallam Tennyson Tennyson published',
        'Title of Literary Work': 'Jack and the Bean-Stalk: English Hexameters',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1888',
        'Event': 'W.B. Yeats published, introduced, and anthologized',
        'Title of Literary Work': 'Fairy and folk tales of the Irish peasantry',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1888',
        'Event': 'Oscar Wilde published',
        'Title of Literary Work': 'The Happy Prince and Other Tales ("The Happy Prince," "The Selfish Giant," "The Nightingale and the Rose," "The Devoted Friend," "The Remarkable Rocket"',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1888',
        'Event': 'George MacDonald published',
        'Title of Literary Work': 'The Light Princess and Other Fairy Tales',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1888',
        'Event': 'David Thompson published',
        'Title of Literary Work': "The Mouse's Wedding",
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1889',
        'Event': 'Andrew Lang published',
        'Title of Literary Work': 'Prince Prigio',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1889 - 1910',
        'Event': 'Andrew Lang and Leonora "Blanche" Lang anthologized and published',
        'Title of Literary Work': 'The Fairy Books (including The Blue Fairy Book, The Red Fairy Book, The Green Fairy Book, etc., ending with The Lilac Fairy Book)',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1890',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': 'English Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1891',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': 'Celtic Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1891',
        'Event': 'Oscar Wilde published',
        'Title of Literary Work': 'A House of Pomegranates ("The Birthday of the Infanta," "The Young King," "The Fisherman and His Soul," "The Star-Child")',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1891',
        'Event': 'Ford Maddox Ford published',
        'Title of Literary Work': 'The Brown Owl',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1892',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': 'Indian Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1893',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': 'More English Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1893',
        'Event': 'Andrew Lang published',
        'Title of Literary Work': 'Prince Ricardo of Pantouflia',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1894',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': 'More Celtic Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1894',
        'Event': 'Straparola’s work translated into English',
        'Title of Literary Work': 'Le piacevoli notti (The Pleasant Nights)',
        'Literary Database?': 'No',
        'Popular Database?': 'No',
        'Color': 'White'
    }, {
        'Date': '1897',
        'Event': 'Mrs. Angus W. Hall anthologized and published',
        'Title of Literary Work': 'Icelandic Fairy Tales',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1897',
        'Event': 'Isabel Bellerby et al. published',
        'Title of Literary Work': 'The Diamond Fairy Book',
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    }, {
        'Date': '1898',
        'Event': 'Kenneth Grahame published',
        'Title of Literary Work': 'The Reluctant Dragon',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1899',
        'Event': 'Juliana Horatia Ewing published',
        'Title of Literary Work': 'Old-Fashioned Fairy Tales',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1899',
        'Event': 'E. Nesbit published',
        'Title of Literary Work': 'The Book of Dragons ("Kind Little Edmund," "The Book of Beasts," "The Deliverers of Their Country," "The Dragon Tamers," "The Fiery Dragon," "The Ice Dragon," "The Island of the Nine Whirlpools," "Uncle James," "Melisande")',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1906',
        'Event': 'Rudyard Kipling published',
        'Title of Literary Work': 'Dymchurch Flit',
        'Literary Database?': 'Yes',
        'Popular Database?': 'No',
        'Color': 'Teal'
    }, {
        'Date': '1916',
        'Event': 'Joseph Jacobs anthologized and published',
        'Title of Literary Work': "Europa's Fairy Book (European Folk and Fairy Tales)",
        'Literary Database?': 'No',
        'Popular Database?': 'Yes',
        'Color': 'Green'
    },]

function Timeline() {
    useEffect(() => {
        let observer;
        let hiddenElements;
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden_item')
                }
            })
        }, {
            rootMargin: '0px',
            // threshold: 0.70
        })
        hiddenElements = document.querySelectorAll('.hidden_item')
        hiddenElements.forEach((elem) => observer.observe(elem))
    }, [])


    const listTexts = texts.map(text => {
        if (text.Event === 'E. Nesbit published') {
            return (
                <>
                    <div className={`text-sky-400 ${classes.timeline_item} hidden_item`}
                         data-text={text['Title of Literary Work']}>
                        <div className={`${classes.timeline_content}`}>
                            <h2 className={`${classes.timeline_content_title}`}>{text.Date}</h2>
                            <p className={classes.timeline_content_desc}>{text.Event}
                            </p>
                        </div>
                    </div>
                    <div className="h-[450px] sm:h-[100px]"></div>
                    <div></div>
                </>
            )
        }
        if (text.Event === 'Oscar Wilde published') {
            return (
                <>
                    <div className={`text-sky-400 ${classes.timeline_item} hidden_item`}
                         data-text={text['Title of Literary Work']}>
                        <div className={`${classes.timeline_content}`}>
                            <h2 className={`${classes.timeline_content_title}`}>{text.Date}</h2>
                            <p className={classes.timeline_content_desc}>{text.Event}
                            </p>
                        </div>
                    </div>
                    <div className="h-[250px] sm:h-[80px]"></div>
                    <div></div>
                </>
            )
        }
        if (text.Color === 'Green') {
            return (
                <div className={`text-emerald-400 ${classes.timeline_item} hidden_item`}
                     data-text={text['Title of Literary Work']}>
                    <div className={`${classes.timeline_content}`}>
                        <h2 className={`${classes.timeline_content_title}`}>{text.Date}</h2>
                        <p className={classes.timeline_content_desc}>{text.Event}
                        </p>
                    </div>
                </div>
            )
        } else if (text.Color === 'Teal') {
            return (
                <div className={`text-sky-400 ${classes.timeline_item} hidden_item`}
                     data-text={text['Title of Literary Work']}>
                    <div className={`${classes.timeline_content}`}>
                        <h2 className={`${classes.timeline_content_title}`}>{text.Date}</h2>
                        <p className={classes.timeline_content_desc}>{text.Event}
                        </p>
                    </div>
                </div>
            )
        } else if (text.Color === 'White') {
            return (
                <>
                    <div className={`text-white ${classes.timeline_item} hidden_item`}
                         data-text={text['Title of Literary Work']}>
                        <div className={`${classes.timeline_content}`}>
                            <h2 className={`${classes.timeline_content_title}`}>{text.Date}</h2>
                            <p className={classes.timeline_content_desc}>{text.Event}
                            </p>
                        </div>
                    </div>
                    <div className="h-[40px]"></div>
                    <div></div>
                </>
            )
        }
    })

    return (
        <>
            <div className={`section-container relative`}>
                <div className={`flex items-top md:pt-[7rem] pt-[3rem]`}>
                    <h2 className={`${classes.timeline_header_title}`}>
                        This timeline includes publication dates for fairy tale texts within both the Fairy Web Literary Fairy Tale Dataset and the Fairy Web Anthology and Popular Fairy Tale Dataset, as well as dates for fairy tale texts that are historically or contextually relevant to the texts and/or authors included in both datasets.
                        <br/>
                        <br/>
                        Fairy tale texts that appear in blue are from the Fairy Web Literary Fairy Tale Dataset, while texts in green are from the Fairy Web Anthology and Popular Fairy Tale Dataset. Texts that appear in white are provided for historical context.
                        <br/>
                        <br/>
                        <p className={`text-[14px]`}>
                            <em>N.B.: this timeline is in no
                                way
                                comprehensive or exhaustive, but rather contains relevant information that was utilized
                                for
                                this
                                digital humanities project.</em>
                        </p>
                    </h2>
                </div>


                <div className={`${classes.timeline}`}>
                    {listTexts}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Le Piacevoli Notte (The Pleasant Nights)">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1550-1553</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola published*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Il Pentamarone (The Tale of Tales, or Entertainment for Little Ones)">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1634-1636</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Giambattista Basile published*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Contes de Fées (Tales of the Fairies)">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1697</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Marie-Catherine d’Aulnoy*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Histoires ou Contes du Temps Passé (Stories or Tales from Times Past)">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1697</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Charles Perrault*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Contes des Fées">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1699</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>First translated into English as <i>Tales of*/}
                    {/*            the Fairies</i>, originally authored by D’Aulnoy*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Les Milles et Une Nuits: Contes Arabes">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1704-1717</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Antoine Galland’s work begins to circulate in*/}
                    {/*            Europe*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Beauty and the Beast">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1704-1705</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Gabrielle-Suzanne Barbot de Villeneuve*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1729</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Perrault’s works are first translated into*/}
                    {/*            English by Robert Samber*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item_nonitalics} hidden_item`}*/}
                    {/*     data-text="&ldquo;On the Fairies of Popular Superstition&rdquo;">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1802-1803</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>An essay by Sir Walter Scott in <i>Minstrelsy*/}
                    {/*            of the Scottish Border</i>*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Oberon">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1805</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>Wieland&apos;s work is translated, which*/}
                    {/*            inspired*/}
                    {/*            other fairy plays, ballets, and Weber’s opera*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Undine">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1811</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>By Baron de la Motte Fouqué; translated into*/}
                    {/*            English soon after (about an elemental water spirit*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={`${classes.timeline_item} hidden_item`}*/}
                    {/*     data-text="Zelis">*/}
                    {/*    <div className={classes.timeline_content}>*/}
                    {/*        <h2 className={classes.timeline_content_title}>1832</h2>*/}
                    {/*        <p className={classes.timeline_content_desc}>A fairy ballet*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            {/* Extra lines */}
            {/*<div className="mt-6 timeline-container md:mt-8" id="timeline-1">*/}
            {/*    <div className="timeline-header">*/}
            {/*        <h2 className="timeline-header__title">  This timeline lists the publication dates for influential and key fairy tale texts, along with other*/}
            {/*            dates and facts that pertain to the British fairy tale tradition. N.B.: this timeline is in no way*/}
            {/*            comprehensive or exhaustive, but rather contains relevant information that was utilized for this*/}
            {/*            digital humanities project.</h2>*/}
            {/*        /!*<h3 className="timeline-header__subtitle">*!/*/}
            {/*        /!*    This timeline lists the publication dates for influential and key fairy tale texts, along with other*!/*/}
            {/*        /!*    dates and facts that pertain to the British fairy tale tradition. N.B.: this timeline is in no way*!/*/}
            {/*        /!*    comprehensive or exhaustive, but rather contains relevant information that was utilized for this*!/*/}
            {/*        /!*    digital humanities project.</h3>*!/*/}
            {/*    </div>*/}
            {/*    <div className="timeline">*/}
            {/*        <div className="timeline-item" data-text="Le Piacevoli Notte (The Pleasant Nights)">*/}
            {/*            <div className="timeline__content">*/}
            {/*                /!*<img className="timeline__img"*!/*/}
            {/*                /!*     src="/giovanni.jpg"/>*!/*/}
            {/*                <h2 className="timeline__content-title">1550-1553</h2>*/}
            {/*                <p className="timeline__content-desc">Giovanni Francesco Straparola*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="timeline-item" data-text="Il Pentamarone (The Tale of Tales, or Entertainment for Little Ones)">*/}
            {/*            <div className="timeline__content">*/}
            {/*                /!*<img className="timeline__img"*!/*/}
            {/*                /!*     src="/giovanni.jpg"/>*!/*/}
            {/*                <h2 className="timeline__content-title">1634-1636</h2>*/}
            {/*                <p className="timeline__content-desc">Giambattista Basile*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="timeline-item" data-text="Contes de Fées (Tales of the Fairies)">*/}
            {/*            <div className="timeline__content">*/}
            {/*                /!*<img className="timeline__img"*!/*/}
            {/*                /!*     src="/giovanni.jpg"/>*!/*/}
            {/*                <h2 className="timeline__content-title">1697</h2>*/}
            {/*                <p className="timeline__content-desc">Marie-Catherine d’Aulnoy*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="timeline-item" data-text="Histoires ou Contes du Temps Passé (Stories or Tales from Times Past)">*/}
            {/*            <div className="timeline__content">*/}
            {/*                /!*<img className="timeline__img"*!/*/}
            {/*                /!*     src="/giovanni.jpg"/>*!/*/}
            {/*                <h2 className="timeline__content-title">1697</h2>*/}
            {/*                <p className="timeline__content-desc">Charles Perrault*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Timeline;
