import * as $ from "jquery";
require ("@progress/kendo-ui/js/kendo.menu.js");
var dataMenu = [
    {
        text: "Model",
        items: [
        {
            text: "Bmw",
            items: [
            { text: "BMW X1" },
            { text: "BMW 3 Series GT" },
            { text: "BMW i8" },
            { text: "BMW X4" },
            { text: "BMW X6" },
            ]
        },
        {
            text: "Mercedes-Benz",
            items: [
            { text: "GLA 45 AMG" },
            { text: "AMG GT" },
            { text: "GLE" },
            { text: "GLE 2019" },
            ],
        }
        ],
        cssClass: "forFont"
    },
    {
        text: "German Cars",
        items: [
        { text: "Audi" },
        { text: "Opel" },
        { text: "Volkswagen" },
        { text: "Ford-Werke GmbH" }
        ],
    },
    {
        text: "Contact",
        cssClass: "forFont",
        url: "#"
    },
    {
        text: "About",
        cssClass: "forFont",
        url: "#grid"
    }
    ];


export function createNavabr(rootElement, data){
  
  
   

    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: {
                data:data,
                
            }
        })
    )
}
var id = $("#ul")
createNavabr($("body"),dataMenu)