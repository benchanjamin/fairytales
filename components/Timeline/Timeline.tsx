import React from 'react';
import classes from "./Timeline.module.css"

function Timeline() {
    return (
        <>
            <div className={`mt-14 section-container relative`}>
                <h2 className={classes.timeline_header_title}>
                    This timeline lists the publication dates for influential and key fairy tale texts, along with other
                    dates and facts that pertain to the British fairy tale tradition. N.B.: this timeline is in no way
                    comprehensive or exhaustive, but rather contains relevant information that was utilized for this
                    digital humanities project.
                </h2>
                <div className={`${classes.timeline}`}>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item_right`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item_right`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item_right`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
                            </p>
                        </div>
                    </div>
                    <div className={`${classes.timeline_item} hidden_item_right`}
                         data-text="Le Piacevoli Notte (The Pleasant Nights)">
                        <div className={classes.timeline_content}>
                            <h2 className={classes.timeline_content_title}>1550-1553</h2>
                            <p className={classes.timeline_content_desc}>Giovanni Francesco Straparola
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
