import { Button, Form, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
    brand: string;
    model: string;
    family: string;
    transmission: string;
    fuel: string;
    line: string;
}

const FilterStore = () => {
    const navigate = useNavigate();

    const brands = [{value: "ssangyong", label: "SSANGYONG"}];
    const models = Array.from({ length: 2025 - 2003 + 1 }, (_, i) => {
        const year = 2003 + i;
        return { label: `${year}`, value: `${year}` };
    });

    const families: Record<string, any> = {
        ssangyong: {
            "2003": [
                { "label": "KORANDO", "value": "korando" },
                { "label": "REXTON", "value": "rexton" },
            ],
            "2004": [
                { "label": "KORANDO", "value": "korando" },
                { "label": "REXTON", "value": "rexton" },
            ],
            "2005": [
                { "label": "KORANDO", "value": "korando" },
                { "label": "REXTON", "value": "rexton" },
            ],
            "2006": [
                { "label": "KORANDO", "value": "korando" },
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
            ],
            "2007": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" },
            ],
            "2008": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" },
            ],
            "2009": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" }
            ],
            "2010": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" }
            ],
            "2011": [
                { "label": "REXTON", "value": "REXTON" },
                { "label": "STAVIC", "value": "STAVIC" },
                { "label": "KYRON", "value": "KYRON" },
                { "label": "ACTYON", "value": "ACTYON" },
                { "label": "ACTYON SPORTS", "value": "ACTYON_SPORTS" },
                { "label": "KORANDO C", "value": "KORANDO C" }
            ],
            "2012": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" },
                { "label": "KORANDO C", "value": "korando_c" }
            ],
            "2013": [
                { "label": "REXTON", "value": "rexton" },
                { "label": "STAVIC", "value": "stavic" },
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "ACTYON SPORTS", "value": "actyon_sports" },
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "REXTON W", "value": "rexton_w" }
            ],
            "2014": [
                { "label": "KYRON", "value": "kyron" },
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "REXTON W", "value": "rexton_w" },
                { "label": "RODIUS", "value": "rodius" }
            ],
            "2015": [
                { "label": "KYRON", "value": "kyron" },
                { "label": "ACTYON", "value": "actyon" },
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "REXTON W", "value": "rexton_w" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" }
            ],
            "2016": [
                { "label": "ACTYON", "value": "actyon" },
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" }
            ],
            "2017": [
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "REXTON W", "value": "rexton_w" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "TIVOLI XLV", "value": "tivoli_xlv" }
            ],
            "2018": [
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "REXTON W", "value": "rexton_w" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "TIVOLI XLV", "value": "tivoli_xlv" }
            ],
            "2019": [
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "NEW ACTYON SPORTS", "value": "new_actyon_sports" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "TIVOLI XLV", "value": "tivoli_xlv" },
                { "label": "REXTON G4", "value": "rexton_g4" },
                { "label": "REXTON SPORTS", "value": "rexton_sports" }
            ],
            "2020": [
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "RODIUS", "value": "rodius" },
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "REXTON G4", "value": "rexton_g4" },
                { "label": "REXTON SPORTS", "value": "rexton_sports" }
            ],
            "2021": [
                { "label": "KORANDO C", "value": "korando_c" },
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "REXTON G4", "value": "rexton_g4" },
                { "label": "REXTON SPORTS", "value": "rexton_sports" }
            ],
            "2022": [
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "TIVOLI XLV", "value": "tivoli_xlv" },
                { "label": "REXTON G4", "value": "rexton_g4" },
                { "label": "REXTON SPORTS", "value": "rexton_sports" },
                { "label": "KORANDO II", "value": "korando_ii" }
            ],
            "2023": [
                { "label": "TIVOLI", "value": "tivoli" },
                { "label": "TIVOLI XLV", "value": "tivoli_xlv" },
                { "label": "REXTON G4", "value": "rexton_g4" },
                { "label": "REXTON SPORTS", "value": "rexton_sports" },
                { "label": "KORANDO II", "value": "korando_ii" },
                { "label": "TORRES", "value": "torres" }
            ]
        },
    };

    const transmissions: Record<string, any> = {
        ssangyong: {
            "2003": {
                "korando": [{ "label": "MEC 4x4", "value": "mec_4x4" }],
                "rexton": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ],
            },
            "2004": {
                "korando": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ],
                "rexton": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ],
            },
            "2005": {
                "korando": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2006": {
                "korando": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4x4", "value": "mec_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4x4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2007": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" }
                ]
            },
            "2008": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2009": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2010": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2011": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" }
                ]
            },
            "2012": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2013": {
                "rexton": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "stavic": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_w": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2014": {
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_w": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2015": {
                "kyron": [
                    { "label": "MEC 4X2", "value": "mec_4x2" }
                ],
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_w": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ]
            },
            "2016": {
                "actyon": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli": [
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ]
            },
            "2017": {
                "korando_c": [
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_w": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli": [
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli_xlv": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ]
            },
            "2018": {
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_w": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli": [
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli_xlv": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ]
            },
            "2019": {
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "new_actyon_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                ],
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                ],
                "tivoli_xlv": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                ],
                "rexton_g4": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_sports": [
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2020": {
                "korando_c": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "rodius": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "rexton_g4": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            },
            "2021": {
                "korando_c": [
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "rexton_g4": [
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ]
            },
            "2022": {
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "tivoli_xlv": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "rexton_g4": [
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_sports": [
                    { "label": "MEC 4X4", "value": "mec_4x4" },
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ],
                "korando_ii": [
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ]
            },
            "2023": {
                "tivoli": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                ],
                "tivoli_xlv": [
                    { "label": "MEC 4X2", "value": "mec_4x2" },
                    { "label": "AUT 4X2", "value": "aut_4x2" }
                ],
                "rexton_g4": [
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ],
                "rexton_sports": [
                    { "label": "AUT 4X4", "value": "aut_4x4" },
                ],
                "korando_ii": [
                    { "label": "AUT 4X2", "value": "aut_4x2" },
                ],
                "torres": [
                    { "label": "AUT 4X4", "value": "aut_4x4" }
                ]
            }
        },
    };

    const fuels: Record<string, any> = {
        "ssangyong": {
            "2003": {
                "korando": {
                    "mec_4x4": [{ "label": "DIESEL", "value": "diesel"}]
                },
                "rexton": {
                    "mec_4x4": [{ "label": "DIESEL", "value": "diesel"}],
                    "aut_4x4": [{ "label": "DIESEL", "value": "diesel"}]
                }
            },
            "2004": {
                "korando": {
                    "mec_4x4": [{ "label": "DIESEL", "value": "diesel"}],
                    "aut_4x4": [{ "label": "DIESEL", "value": "diesel"}]
                },
                "rexton": {
                    "mec_4x4": [{ "label": "DIESEL", "value": "diesel"}],
                    "aut_4x4": [{ "label": "DIESEL", "value": "diesel"}]
                }
            },
        }
    };

    const lines: Record<string, any> = {
        "ssangyong": {
            "2003": {
                "korando": {
                    "mec_4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    }
                },
                "rexton": {
                    "mec_4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    },
                    "aut_4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    }
                }
            },
            "2004": {
                "korando": {
                    "mec_4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    },
                    "aut_4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    }
                },
                "rexton": {
                    "mec_4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    },
                    "aut_4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    }
                }
            }
        }
    };

    const [ brand, setBrand ] = React.useState<string>("");
    const [ model, setModel ] = React.useState<string>("");
    const [ family, setFamily ] = React.useState<string>("");
    const [ transmission, setTransmission ] = React.useState<string>("");
    const [ fuel, setFuel ] = React.useState<string>("");
    const [ line, setLine ] = React.useState<string>("");

    const handleBrandChange = (value: string) => {
        setBrand(value);
        setModel("");
        setFamily("");
        setTransmission("");
        setFuel("");
        setLine("");
    };

    const handleModelChange = (value: string) => {
        setModel(value);
        setFamily("");
        setTransmission("");
        setFuel("");
        setLine("");
    };

    const handleFamilyChange = (value: string) => {
        setFamily(value);
        setTransmission("");
        setFuel("");
        setLine("");
    };

    const handleTransmissionChange = (value: string) => {
        setTransmission(value);
        setFuel("");
        setLine("");
    };

    const handleFuelChange = (value: string) => {
        setFuel(value);
        setLine("");
    };

    React.useEffect(() => {

    }, [brand, model, family, transmission, fuel, line])

    return (
        <div className="bg-[url('https://puntokoreano.com/images/filter_background.png')] w-full h-fit bg-center 2xl:bg-contain" >
            <div className="w-full p-10 sm:w-96 sm:mx-auto lg:w-[500px] 2xl:w-[600px]">
                <Form labelCol={{ span: 4 }} layout="vertical">
                    <h1 className="text-2xl text-center font-bold w-full mb-5 2xl:text-3xl">Encuentra tus repuestos Ssangyong fácilmente</h1>
                    <Form.Item<FieldType>
                        label="Marca"
                        name="brand"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={brand} options={brands} onChange={(value) => handleBrandChange(value)} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Modelo"
                        name="model"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={model} options={models} onChange={(value) => handleModelChange(value)} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Familia"
                        name="family"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={family} options={families?.[brand]?.[model]} onChange={(value) => handleFamilyChange(value)} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Caja de cambios"
                        name="transmission"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={transmission} options={transmissions?.[brand]?.[model]?.[family]} onChange={(value) => handleTransmissionChange(value)} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Combustible"
                        name="fuel"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={fuel} options={fuels?.[brand]?.[model]?.[family]?.[transmission]} onChange={(value) => handleFuelChange(value)} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Linea"
                        name="line"
                        required
                        labelCol={{ span: 24 }}
                        className="font-bold"
                    >
                        <Select value={line} options={lines?.[brand]?.[model]?.[family]?.[transmission]?.[fuel]} onChange={setLine} />
                    </Form.Item>
                    <Button type="primary" className="mx-auto block" onClick={() => navigate('/store')}>
                        Buscar
                    </Button>
                </Form>
            </div>

        </div>
    )
}
export default FilterStore;