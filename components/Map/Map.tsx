import React, {useEffect} from "react";
import * as d3 from "d3";
import {event} from "next/dist/build/output/log";

function Map(props) {
    const svgRef = React.useRef(null);

    useEffect(() => {
        const width = 960;
        const height = 500;
        const FILE = "/static/world-lowres.geojson";

        const svg = d3.select(svgRef.current)
            .attr("width", width).attr("height", height).style("margin", "50px auto");

// add objects to globe, so they can be zoomed
        const globe = svg.append("g");

// choose a projection
        const projection = d3.geoMercator();

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
            });

        d3.json('/static/cleaned-data-12-4.geojson').then(function (data) {
            const pointsOfInterest = data.features.filter(d => d.geometry.type == 'Point');

            svg.select("g").selectAll("g.city").data(pointsOfInterest).enter()
                .append("g").attr("class", "city")
                .attr("transform", d => `translate(${[projection(d.geometry.coordinates)]})`)
                .each(function (d) {
                    d3.select(this).append("circle").attr('r', Math.sqrt(d.properties.original_total_count)).raise()
                        .on("mouseenter", showTooltip)
                        .on("mouseleave", hideTooltip);
                    d3.select(this).append("text").attr('y', 2).text(d.properties.name);
                });

        })

        function drawTooltips() {
            svg.append("g").attr("id", "tooltip")
                .style("opacity", 0)
                .each(function (d) {
                    d3.select(this).append("rect")
                        .attr("height", 40)
                        .attr("width", 150)
                        .attr("rx", 5).attr("ry", 5)
                        .attr("x", -75).attr("y", -20)
                    d3.select(this).append("text")
                        .attr("y", -5)
                    d3.select(this).append("text")
                        .attr("y", 15);
                })
        }

        function showTooltip(d, i, n) {
            const coords = d3.mouse(svg.node())
            const tooltip = d3.select("#tooltip")
                .attr("transform", `translate(${[coords[0], coords[1] + 40]})`)
                .style("opacity", 1);
            tooltip.select("text:first-of-type")
                .text(`Location: \"${d.properties.original_text}\"`)
            tooltip.select("text:last-child")
                .text(`Total count: ${d.properties.original_total_count}`)
        }

        function hideTooltip() {
            d3.select("#tooltip").style("opacity", 0)
        }

// SVG zoom
        const zoom = d3.zoom()
            .scaleExtent([1, 80])
            .translateExtent([[0, 0], [width, height]])
            .on('zoom', () => {
                globe.attr("transform", d3.event.transform);
                d3.select("#tooltip").attr("transform", d3.event.transform);
            });

        svg.call(zoom);

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

    return (
        <div id="chart">
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default Map;
