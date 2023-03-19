import React, {useEffect} from 'react';
import classes from "./Timeline.module.css"
import Head from "next/head";
import Script from "next/script";


const texts = [{
    'Date': '1550-1553',
    'Event': 'Giovanni Francesco Straparola published',
    'Literary Work': 'Le piacevoli notti (The Pleasant Nights)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1634-1636',
    'Event': 'Giambattista Basile published',
    'Literary Work': 'Il Pentamerone, Lo cunto de li cunti (The Tale of Tales)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1697',
    'Event': 'Marie-Catherine d’Aulnoy published',
    'Literary Work': 'Contes des fées (Tales of the Fairies)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1697',
    'Event': 'Charles Perrault published',
    'Literary Work': 'Histoires ou contes du temps passé (Stories or Tales from Past Times)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1699',
    'Event': "D'Aulnoy's text first translated into English ",
    'Literary Work': 'Tales of the Fairies',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1704-1717',
    'Event': 'Antoine Galland’s work begins to circulate in Europe',
    'Literary Work': 'Les milles et une nuits: contes arabes',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1704-1705',
    'Event': 'Gabrielle-Suzanne Barbot de Villeneuve published',
    'Literary Work': 'Beauty and the Beast',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': true
}, {
    'Date': '1729',
    'Event': "Perrault's text first translated into English by Robert Samber",
    'Literary Work': 'Histoires ou contes du temps passé (Stories or Tales from Past Times)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1802-1803',
    'Event': 'An essay by Sir Walter Scott is published in Minstrelsy of the Scottish Border',
    'Literary Work': '"On the Fairies of Popular Superstition"',
    'In Literary Database?': 'No',
    'In Popular Database?': 'No',
    'bold': false
}, {
    'Date': '1805',
    'Event': "Wieland's work is translated, which inspired other fairy plays, ballets, and Weber’s opera",
    'Literary Work': 'Oberon',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1811',
    'Event': 'Baron de la Motte Fouqué published; translated into English soon after',
    'Literary Work': 'Undine',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1812',
    'Event': 'Brothers Grimm first published in Germany',
    'Literary Work': 'Kinder- und Hausmärchen (German Popular Stories)',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1823',
    'Event': 'Selection of the Brothers Grimm fairy tales published for the first time in England, translated into English by Edgar Taylor and illustrated by George Cruikshank ',
    'Literary Work': 'Kinder- und Hausmärchen (German Popular Stories)',
    'In Literary Database?': 'No',
    'In Popular Database?': 'Yes',
    'bold': false
}, {
    'Date': '1825',
    'Event': 'Thomas Crofton Croker, with the help of Thomas Keightley, published',
    'Literary Work': 'Fairy Legends of South Ireland',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1828',
    'Event': 'Thomas Keightley published first edition, illustrated by W. H. Brooke (later republished in the 1970s as The World Guide to Gnomes, Fairies, Elves and Other Little People)',
    'Literary Work': 'Fairy Mythology, Two Volumes',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1831',
    'Event': 'Joseph Ritson published',
    'Literary Work': 'Fairy Tales',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1832',
    'Event': 'Ballet first performed in London (based on a story by Charles Nodier called Trilby); most popular when danced by Pauline DeVernay in 1836',
    'Literary Work': 'La Sylphide',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1834',
    'Event': 'Thomas Keightley published',
    'Literary Work': 'Tales and Popular Fictions; their Resemblances and Transmissions from Country to Country',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1836',
    'Event': 'Anna Eliza Bray, the first Victorian female folklorist published',
    'Literary Work': 'A Description of Devonshire Bordering on the Tamar and the Navy; its Natural History, Manners, Customs, Superstitions, Scenery…. ',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1838-1840',
    'Event': 'Edward Lane’s version published serially',
    'Literary Work': 'The Thousand and One Nights',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': true
}, {
    'Date': '1846',
    'Event': 'Hans Christian Andersen’s tales were translated into English in 5 volumes',
    'Literary Work': 'Fairy Tales',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': true
}, {
    'Date': '1846',
    'Event': 'Edward Lear published',
    'Literary Work': 'The Book of Nonsense',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1848',
    'Event': 'Giambattista Basile’s work translated into English',
    'Literary Work': 'Il Pentamerone, Lo cunto de li cunti (The Tale of Tales)',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1850',
    'Event': 'Thomas Keightely expanded edition published',
    'Literary Work': 'Fairy Mythology',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1854',
    'Event': 'Anna Eliza Bray published',
    'Literary Work': 'A Peep at the Pixies',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}, {
    'Date': '1894',
    'Event': 'Straparola’s work translated into English',
    'Literary Work': 'Le piacevoli notti (The Pleasant Nights)',
    'In Literary Database?': '',
    'In Popular Database?': '',
    'bold': false
}]

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
        if (text['bold'] !== true) {
            return (
                <div className={`${classes.timeline_item} hidden_item`}
                     data-text={text['Literary Work']}>
                    <div className={classes.timeline_content}>
                        <h2 className={classes.timeline_content_title}>{text.Date}</h2>
                        <p className={classes.timeline_content_desc}>{text.Event}
                        </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${classes.timeline_item_bold} hidden_item`}
                     data-text={text['Literary Work']}>
                    <div className={classes.timeline_content}>
                        <h2 className={classes.timeline_content_title}>{text.Date}</h2>
                        <p className={classes.timeline_content_desc}>{text.Event}
                        </p>
                    </div>
                </div>
            )
        }
    })

    return (
        <>
            <div className={`section-container relative`}>
                <div className={`flex items-top md:pt-[7rem] pt-[3rem]`}>
                    <h2 className={`${classes.timeline_header_title}`}>
                        This timeline lists the publication dates for influential and key fairy tale texts, along with
                        other
                        dates and facts that pertain to the British fairy tale tradition.
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
