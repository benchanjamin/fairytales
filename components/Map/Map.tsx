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
                drawButtons();
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

        const zoom = d3.zoom()
            .scaleExtent([1, 80])
            .translateExtent([[0, 0], [width, height]])
            .on('zoom', () => {
                globe.attr("transform", d3.event.transform);
            });

        svg.call(zoom).on("dblclick.zoom", null);

        function drawButtons() {
            const buttonDiv = svg.append("foreignObject")
                .attr("x", 920).attr("y", 435).attr("width", "29px").attr("height", "49px").style("border-radius", "8px")
                .style("background-color", "white")
                .style("box-shadow", "0 1px 4px rgb(0 0 0 / 30%)")
                .append("xhtml:div").attr("display", "block")
            buttonDiv
                .append("xhtml:button").text("+").attr("id", "zoom_in").style("display", "block")
                .style("margin", "0 auto").style("font-family", "monospace").style("padding", "2px 0")
            buttonDiv.append("hr")
            buttonDiv
                .append("xhtml:button").text("-").attr("id", "zoom_out").style("display", "block")
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
                        .attr("height", 40)
                        .attr("width", 250)
                        .attr("rx", 5).attr("ry", 5)
                        .attr("x", -75).attr("y", -20)
                    d3.select(this).append("text")
                        .attr("x", 50)
                        .attr("y", -5)
                    d3.select(this).append("text")
                        .attr("x", 50)
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
        <>


            <div id="chart">
                <svg ref={svgRef} viewBox='0 0 960 500' xmlns="http://www.w3.org/1999/xhtml">
                    {/*<foreignObject x="900" y="440" width="160" height="160">*/}
                    {/*    <button>Button1</button>*/}
                    {/*</foreignObject>*/}
                    {/*<foreignObject x="900" y="470" width="160" height="160">*/}
                    {/*    <button>Button2</button>*/}
                    {/*</foreignObject>*/}
                </svg>
            </div>
        </>
    );
}

export default Map;
