import React, {useEffect} from 'react';
import classes from "./Timeline.module.css"
import Head from "next/head";
import Script from "next/script";

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
                                comprehensive or exhaustive, but rather contains relevant information that was utilized for
                                this
                                digital humanities project.</em>
                        </p>
                    </h2>
                </div>


                <div className={`${classes.timeline}`}>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola published
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Il Pentamarone (The Tale of Tales, or Entertainment for Little Ones)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1634-1636</h2>
                            <p className={classes.timeline_content_desc}>Giambattista Basile published
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Contes de Fées (Tales of the Fairies)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1697</h2>
                            <p className={classes.timeline_content_desc}>Marie-Catherine d’Aulnoy
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Histoires ou Contes du Temps Passé (Stories or Tales from Times Past)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1697</h2>
                            <p className={classes.timeline_content_desc}>Charles Perrault
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Contes des Fées">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1699</h2>
                            <p className={classes.timeline_content_desc}>First translated into English as <i>Tales of
                                the Fairies</i>, originally authored by D’Aulnoy
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Les Milles et Une Nuits: Contes Arabes">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1704-1717</h2>
                            <p className={classes.timeline_content_desc}>Antoine Galland’s work begins to circulate in
                                Europe
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Beauty and the Beast">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1704-1705</h2>
                            <p className={classes.timeline_content_desc}>Gabrielle-Suzanne Barbot de Villeneuve
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1729</h2>
                            <p className={classes.timeline_content_desc}>Perrault’s works are first translated into
                                English by Robert Samber
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item_nonitalics} hidden_item`}
                         data-text="&ldquo;On the Fairies of Popular Superstition&rdquo;">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1802-1803</h2>
                            <p className={classes.timeline_content_desc}>An essay by Sir Walter Scott in <i>Minstrelsy
                                of the Scottish Border</i>
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Oberon">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1805</h2>
                            <p className={classes.timeline_content_desc}>Wieland&apos;s work is translated, which
                                inspired
                                other fairy plays, ballets, and Weber’s opera
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Undine">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1811</h2>
                            <p className={classes.timeline_content_desc}>By Baron de la Motte Fouqué; translated into
                                English soon after (about an elemental water spirit
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Zelis">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1832</h2>
                            <p className={classes.timeline_content_desc}>A fairy ballet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
