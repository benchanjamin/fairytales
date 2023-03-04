import React, {useEffect, useState} from "react";
import * as d3 from "d3";
import classes from "./Map.module.css"
import TitleListBox from "@components/TitleListBox/TitleListBox";
import AuthorListBox from "@components/AuthorListBox/AuthorListBox";
import AuthorAndTitleRadioGroup from "@components/AuthorAndTitleRadioGroup/AuthorAndTitleRadioGroup";
import AuthorAndTitleListBox from "@components/AuthorAndTitleListBox/AuthorAndTitleListBox";

function Map(props) {
    let highlightColor = '#5ce1e6';

    let titleMapper = {
        all_text: 'All Text',
        dymchurch_flit: 'Dymchurch Flit',
        kind_little_edmund: 'Kind Little Edmund',
        melisande: 'Melisande',
        murdochs_rath: "Murdoch's Rath",
        prince_prigio: 'Prince Prigio',
        prince_ricardo_of_pantouflia: 'Prince Ricardo of Pantouflia',
        the_birthday_of_the_infanta: 'The Birthday of the Infanta',
        the_brown_owl: 'The Brown Owl',
        the_deliverers_of_their_country: 'The Deliverers of Their Country',
        the_fiddler_in_the_fairy_ring: 'The Fiddler in the Fairy Ring',
        the_fiery_dragon: 'The Fiery Dragon',
        the_fisherman_and_his_soul: 'The Fisherman and His Soul',
        the_happy_prince: 'The Happy Prince',
        the_ice_dragon: 'The Ice Dragon',
        the_island_of_the_nine_whirlpools: 'The Island of the Nine Whirlpools',
        the_king_of_the_golden_river: 'The King of the Golden River',
        the_laird_and_the_man_of_peace: 'The Laird and the Man of Peace',
        the_light_princess: 'The Light Princess',
        the_little_lame_prince_and_his_travelling_cloak: 'The Little Lame Prince and His Traveling Cloak',
        the_magic_fishbone: 'The Magic Fishbone',
        the_nix_in_mischief: 'The Nix in Mischief',
        the_pied_piper_of_hamelin: 'The Pied Piper of Hamelin',
        the_reluctant_dragon: 'The Reluctant Dragon',
        the_remarkable_rocket: 'The Remarkable Rocket',
        the_rose_and_the_ring: 'The Rose and the Ring',
        the_star_child: 'The Star-Child',
        the_young_king: 'The Young King',
        uncle_james: 'Uncle James',
        the_devoted_friend: 'The Devoted Friend'
    }

    let authorMapper = {
        'Phantasmion': 'Sara Coleridge',
        'The Pied Piper of Hamelin': 'Robert Browning',
        'The King of the Golden River': 'John Ruskin',
        'The Rose and the Ring': 'William Makepeace Thackeray',
        'Goblin Market': 'Christina Rossetti',
        'The Magic Fishbone': 'Charles Dickens',
        'The Little Lame Prince and His Traveling Cloak': 'Dinah McCraik',
        "I Won't": 'Juliana Horatia Ewing',
        'Good Luck Is Better Than Gold': 'Juliana Horatia Ewing',
        'Kind William and the Water Sprite': 'Juliana Horatia Ewing',
        'Knave and Fool': 'Juliana Horatia Ewing',
        "Murdoch's Rath": 'Juliana Horatia Ewing',
        'The Cobbler and the Ghosts': 'Juliana Horatia Ewing',
        'The Fiddler in the Fairy Ring': 'Juliana Horatia Ewing',
        "The First Wife's Wedding Ring": 'Juliana Horatia Ewing',
        'The Hillman and the Housewife': 'Juliana Horatia Ewing',
        'The Laird and the Man of Peace': 'Juliana Horatia Ewing',
        'The Little Darner': 'Juliana Horatia Ewing',
        'The Magic Jar': 'Juliana Horatia Ewing',
        'The Magician Turned Mischief-Maker': 'Juliana Horatia Ewing',
        "The Magicians' Gifts": 'Juliana Horatia Ewing',
        'The Neck, A Legend of Lake': 'Juliana Horatia Ewing',
        'The Nix in Mischief': 'Juliana Horatia Ewing',
        'The Ogre Courting': 'Juliana Horatia Ewing',
        'The Widows and the Strangers': 'Juliana Horatia Ewing',
        'Under the Sun': 'Juliana Horatia Ewing',
        'The Fairies (A Poem)': 'William Allingham',
        'The Bread of Discontent': 'Mary De Morgan',
        'The Heart of Princess Joan': 'Mary De Morgan',
        'The Necklace of Princess Fiorimonde': 'Mary De Morgan',
        "The Pedlar's Pack": 'Mary De Morgan',
        'The Three Clever Kings': 'Mary De Morgan',
        'The Wanderings of Arasmon': 'Mary De Morgan',
        'The Wise Princess': 'Mary De Morgan',
        "The Giant's Heart": 'George MacDonald',
        'The Golden Key': 'George MacDonald',
        'The Light Princess': 'George MacDonald',
        'The Devoted Friend': 'Oscar Wilde',
        'The Happy Prince': 'Oscar Wilde',
        'The Nightingale and the Rose': 'Oscar Wilde',
        'The Remarkable Rocket': 'Oscar Wilde',
        'The Selfish Giant': 'Oscar Wilde',
        'Prince Prigio': 'Andrew Lang',
        'The Brown Owl': 'Ford Madox Ford',
        'The Birthday of the Infanta': 'Oscar Wilde',
        'The Fisherman and His Soul': 'Oscar Wilde',
        'The Star-Child': 'Oscar Wilde',
        'The Young King': 'Oscar Wilde',
        'Prince Ricardo of Pantouflia': 'Andrew Lang',
        'The Reluctant Dragon': 'Kenneth Grahame',
        'Kind Little Edmund': 'E. Nesbit',
        'The Book of Beasts': 'E. Nesbit',
        'The Deliverers of Their Country': 'E. Nesbit',
        'The Dragon Tamers': 'E. Nesbit',
        'The Fiery Dragon': 'E. Nesbit',
        'The Ice Dragon': 'E. Nesbit',
        'The Island of the Nine Whirlpools': 'E. Nesbit',
        'Uncle James': 'E. Nesbit',
        'Melisande': 'E. Nesbit',
        'Dymchurch Flit': 'Rudyard Kipling'
    }


    const svgRef = React.useRef(null);
    const [textFilter, setTextFilter] = useState({id: 0, name: "All Texts", alt: "all_texts"});
    const [authorFilter, setAuthorFilter] = useState({id: 0, name: 'All Authors', titles: []});
    const [type, setType] = useState({name: 'Titles', desc: 'Choose from titles on map'});


    useEffect(() => {
        const width = 960;
        const height = 500;
        const FILE = "/static/earth-coastlines-10km.geo.json";

        const svg = d3.select(svgRef.current).attr("viewBox", `0 0 ${width} ${height}`)

// add objects to globe, so they can be zoomed
        const globe = svg.append("g");

// choose a projection
        const projection = d3.geoMercator().scale(width / 3 / Math.PI)
            .center([20, 30])
            .translate([width / 2, height / 2]);

// create a path generator function for the projection
        const geoPath = d3.geoPath()
            .projection(projection);

        const map = {
            features: undefined
        };


        d3.json(FILE)
            .then(function (shapes) {
                map.features = shapes.features;

                // drawGraticules();
                draw();
                drawTooltips();
                drawButtons();
                drawPointsOfInterest()
            });

        function drawPointsOfInterest() {
            d3.json('/static/cleaned-data-12-4.geojson').then(function (data) {
                let pointsOfInterest = data.features.filter(d => d.geometry.type === 'Point');
                pointsOfInterest.sort((a, b) => d3.descending(a.properties.original_total_count, b.properties.original_total_count));

                svg.select("g").selectAll("g.city").data(pointsOfInterest).enter()
                    .append("g").attr("class", "city")
                    .attr("transform", d => `translate(${[projection(d.geometry.coordinates)]})`)
                    .each(function (d1) {
                        d3.select(this).append("circle").raise()
                            .attr('r', Math.sqrt(d1.properties.original_total_count) + 2)
                            .attr('transform', `scale(${(1)})`)
                            .on("mouseenter", (d2) => {
                                showTooltip(d2);
                                d3.select(this).select("circle").style("fill", highlightColor);
                            })
                            .on("mouseleave", () => {
                                hideTooltip();
                                d3.select(this).select("circle").style("fill", "#5a9294");
                            })
                    });
            })
        }


        const zoom = d3.zoom()
            .scaleExtent([1, 600])
            .translateExtent([[0, 0], [width, height]])
            .on('zoom', () => {
                const currentTransform = d3.event.transform;
                globe.attr("transform", currentTransform);
                console.log(currentTransform.k)
                d3.select("g").selectAll("circle").attr("transform", function (d, i, n) {
                    return `scale(${(1 / currentTransform.k)})`
                })
            });

        svg.call(zoom).on("dblclick.zoom", null).on("wheel.zoom", null);

        function drawButtons() {
            const buttonDiv = svg.append("foreignObject")
                .attr("x", 920).attr("y", 435).attr("width", "29px").attr("height", "49px").style("border-radius", "8px")
                .style("background-color", "white")
                .style("box-shadow", "0 1px 4px rgb(0 0 0 / 30%)")
                .append("xhtml:div").style("cursor", "pointer")
            buttonDiv.append("div").attr("id", "zoom_in")
                .append("xhtml:button").text("+").style("display", "block")
                .attr("height", "24px").attr("width", "14px")
                .style("margin", "0 auto").style("font-family", "monospace").style("padding", "2px 0")
            buttonDiv.append("hr")
            buttonDiv.append("div").attr("id", "zoom_out")
                .append("xhtml:button").text("-").style("display", "block")
                .attr("height", "24px").attr("width", "14px")
                .style("margin", "0 auto").style("font-family", "monospace").style("padding", "2px 0")
            d3.select("#zoom_in").on("click", function () {
                zoom.scaleBy(svg.transition().duration(300), 1.5);
            });
            d3.select("#zoom_out").on("click", function () {
                zoom.scaleBy(svg.transition().duration(300), 0.5);
            });
        }

        function drawTooltips() {
            svg.append("g").attr("id", "tooltip")
                .style("opacity", 0)
                .each(function (d) {
                    d3.select(this).append("rect")
                        .attr("height", 100)
                        .attr("width", 280)
                        .attr("rx", 5).attr("ry", 5)
                        .attr("x", -140).attr("y", -20)
                    d3.select(this).append("text")
                        .attr("x", 0)
                        .attr("y", -5)
                    d3.select(this).append("text")
                        .attr("x", 0)
                        .attr("y", 15);
                    d3.select(this).append("text")
                        .attr("x", 0)
                        .attr("y", 35);
                    d3.select(this).append("text")
                        .attr("x", 0)
                        .attr("y", 55);
                    d3.select(this).append("text")
                        .attr("x", 0)
                        .attr("y", 75);
                })
        }

        function showTooltip(d) {
            const coords = d3.mouse(svg.node())
            const tooltip = d3.select("#tooltip")
                .attr("transform", `translate(${[coords[0], coords[1] + 40]})`)
                .style("opacity", 1);
            tooltip.select("text:first-of-type")
                .text(`Location: \"${d.properties.original_text}\"`)
            tooltip.select("text:nth-of-type(2)")
                .text(`Text: \"${titleMapper[d.properties.original_book_title]}\"`)
            tooltip.select("text:nth-of-type(3)")
                .text(`Author: ${authorMapper[titleMapper[d.properties.original_book_title]]}`)
            tooltip.select("text:nth-of-type(4)")
                .text(`Count in Text: ${d.properties.original_count}`)
            tooltip.select("text:last-child")
                .text(`Total Count Across All Texts: ${d.properties.original_total_count}`)
        }

        function hideTooltip() {
            d3.select("#tooltip").style("opacity", 0)
        }

        function draw() {
            globe.selectAll("path.country")
                .data(map.features)
                .enter()
                .append("path")
                .attr("class", "country")
                .attr('d', geoPath).lower()
        }

        // function drawGraticules() {
        //     console.log(d3.geoGraticule10())
        //     globe.append("path").attr("class", "graticule")
        //         .datum(d3.geoGraticule10())
        //         .attr('d', geoPath)
        // }
    }, [svgRef])

    useEffect(() => {
        const width = 960;
        const height = 500;

        const projection = d3.geoMercator().scale(width / 3 / Math.PI)
            .center([20, 30])
            .translate([width / 2, height / 2]);

        function showTooltip(d) {
            const coords = d3.mouse(d3.select(svgRef.current).node())
            const tooltip = d3.select("#tooltip")
                .attr("transform", `translate(${[coords[0], coords[1] + 40]})`)
                .style("opacity", 1);
            tooltip.select("text:first-of-type")
                .text(`Location: \"${d.properties.original_text}\"`)
            tooltip.select("text:nth-of-type(2)")
                .text(`Text: \"${titleMapper[d.properties.original_book_title]}\"`)
            tooltip.select("text:nth-of-type(3)")
                .text(`Author: ${authorMapper[titleMapper[d.properties.original_book_title]]}`)
            tooltip.select("text:nth-of-type(4)")
                .text(`Count in Text: ${d.properties.original_count}`)
            tooltip.select("text:last-child")
                .text(`Total Count Across All Texts: ${d.properties.original_total_count}`)
        }

        function hideTooltip() {
            d3.select("#tooltip").style("opacity", 0)
        }

        function updateTitles(filter) {
            d3.json('/static/cleaned-data-12-4.geojson').then(function (data) {
                // TODO: delete existing points
                d3.select(svgRef.current).select("g").selectAll("g.city").remove();
                let pointsOfInterest = data.features.filter(d => d.geometry.type === 'Point');
                if (filter.name !== "All Texts") {
                    pointsOfInterest = pointsOfInterest.filter(d => d.properties.original_book_title === filter.alt)
                }
                pointsOfInterest.sort((a, b) => d3.descending(a.properties.original_total_count, b.properties.original_total_count));

                d3.select(svgRef.current).select("g").selectAll("g.city").data(pointsOfInterest).enter()
                    .append("g").attr("class", "city")
                    .attr("transform", d => {
                        return `translate(${[projection(d.geometry.coordinates)]})`
                    })
                    .each(function (d1) {
                        const globe = d3.select(svgRef.current).select("g");
                        let currentScaleValue = globe.attr("transform")
                        if (currentScaleValue === null) {
                            currentScaleValue = 1;
                        } else {
                            let regex = /[+-]?\d+(\.\d+)?/g;
                            let floats = currentScaleValue.match(regex).map(function (v) {
                                return parseFloat(v);
                            });
                            currentScaleValue = floats[2]
                        }
                        currentScaleValue = 1 / currentScaleValue
                        d3.select(this).append("circle").raise()
                            .attr('r', Math.sqrt(d1.properties.original_total_count) + 2)
                            .attr('transform', `scale(${currentScaleValue})`)
                            .on("mouseenter", (d2) => {
                                showTooltip(d2);
                                d3.select(this).select("circle").style("fill", highlightColor);
                            })
                            .on("mouseleave", () => {
                                hideTooltip();
                                // Add +1 to i1 index because 0th index is path.country while rest are g.city
                                d3.select(this).select("circle").style("fill", "#5a9294")
                            })
                    });
            })
        }


        function updateAuthors(filter) {
            d3.json('/static/cleaned-data-12-4.geojson').then(function (data) {
                d3.select(svgRef.current).select("g").selectAll("g.city").remove();

                let pointsOfInterest = data.features.filter(d => d.geometry.type === 'Point');
                if (filter.name !== "All Authors") {
                    pointsOfInterest = pointsOfInterest.filter(d => authorMapper[titleMapper[d.properties.original_book_title]] === filter.name)
                }
                pointsOfInterest.sort((a, b) => d3.descending(a.properties.original_total_count, b.properties.original_total_count));


                d3.select(svgRef.current).select("g").selectAll("g.city").data(pointsOfInterest).enter()
                    .append("g").attr("class", "city")
                    .attr("transform", d => {
                        return `translate(${[projection(d.geometry.coordinates)]})`
                    })
                    .each(function (d1) {
                        const globe = d3.select(svgRef.current).select("g");
                        let currentScaleValue = globe.attr("transform")
                        if (currentScaleValue === null) {
                            currentScaleValue = 1;
                        } else {
                            let regex = /[+-]?\d+(\.\d+)?/g;
                            let floats = currentScaleValue.match(regex).map(function (v) {
                                return parseFloat(v);
                            });
                            currentScaleValue = floats[2]
                        }
                        currentScaleValue = 1 / currentScaleValue
                        d3.select(this).append("circle").raise()
                            .attr('r', Math.sqrt(d1.properties.original_total_count) + 2)
                            .attr('transform', `scale(${currentScaleValue})`)
                            .on("mouseenter", (d2) => {
                                showTooltip(d2);
                                d3.select(this).select("circle").style("fill", highlightColor);
                            })
                            .on("mouseleave", () => {
                                hideTooltip();
                                // Add +1 to i1 index because 0th index is path.country while rest are g.city
                                d3.select(this).select("circle").style("fill", "#5a9294")
                            })
                    });
            })
        }

        // @ts-ignore
        if (type.name === 'By Title') {
            updateTitles(textFilter)
        } else {
            updateAuthors(authorFilter)
        }

    }, [type, textFilter, authorFilter]);


    return (
        <>
            <div className={`flex items-start pt-[7rem] pb-[1rem] section-container mb-4`}>
                <h2 className={classes.map_header_title}>
                    Data Visualization of Mappable Locations in the Nineteenth-Century Literary Fairy Tale
                </h2>
            </div>
            <div id="chart" className="relative">
                <AuthorAndTitleListBox onChange={setType}/>
                {(type.name === 'By Title') ? <TitleListBox onChange={setTextFilter} defaultSelectedValue={textFilter}/> :
                    <AuthorListBox onChange={setAuthorFilter} defaultSelectedValue={authorFilter}/>}
                <svg ref={svgRef} id="svg-main" xmlns="http://www.w3.org/1999/xhtml"/>
            </div>
        </>
    );
}

export default Map;
