import { Button, Form, Select } from "antd";
import React from "react";

type FieldType = {
    brand: string;
    model: string;
    family: string;
    transmission: string;
    fuel: string;
    line: string;
}

const FilterStore = () => {
    const brands = [{value: "ssangyong", label: "SSANGYONG"}];
    const models = Array.from({ length: 2025 - 2003 + 1 }, (_, i) => {
        const year = 2003 + i;
        return { label: `${year}`, value: `${year}` };
    });

    const families: Record<string, any> = {
        "ssangyong": {
            "2003": [{ label: "KORANDO", value: "korando"}, { label: "REXTON", value: "rexton"}],
            "2004": [{ label: "KORANDO", value: "korando"}, { label: "REXTON", value: "rexton"}],
        }
    }

    const transmissions: Record<string, any> = {
        "ssangyong": {
            "2003": {
                "korando": [{ label: "MEC 4x4", value: "mec4x4"}],
                "rexton": [{ label: "MEC 4x4", value: "mec4x4"}, { label: "AUT 4X4", value: "aut4x4"}],
            },
            "2004": {
                "korando": [{ label: "MEC 4x4", value: "mec4x4"}, { label: "AUT 4X4", value: "aut4x4"}],
                "rexton": [{ label: "MEC 4x4", value: "mec4x4"}, { label: "AUT 4X4", value: "aut4x4"}],
            }
        }
    };

    const fuels: Record<string, any> = {
        "ssangyong": {
            "2003": {
                "korando": {
                    "mec4x4": [{ label: "DIESEL", value: "diesel"}]
                },
                "rexton": {
                    "mec4x4": [{ label: "DIESEL", value: "diesel"}],
                    "aut4x4": [{ label: "DIESEL", value: "diesel"}]
                }
            },
            "2004": {
                "korando": {
                    "mec4x4": [{ label: "DIESEL", value: "diesel"}],
                    "aut4x4": [{ label: "DIESEL", value: "diesel"}]
                },
                "rexton": {
                    "mec4x4": [{ label: "DIESEL", value: "diesel"}],
                    "aut4x4": [{ label: "DIESEL", value: "diesel"}]
                }
            }
        }
    };

    const lines: Record<string, any> = {
        "ssangyong": {
            "2003": {
                "korando": {
                    "mec4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    }
                },
                "rexton": {
                    "mec4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    },
                    "aut4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    }
                }
            },
            "2004": {
                "korando": {
                    "mec4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    },
                    "aut4x4": {
                        "diesel": [{ label: "KORANDO 4WD D29", value: "korando4wdd29"}]
                    }
                },
                "rexton": {
                    "mec4x4": {
                        "diesel": [{ label: "REXTON 4WD D29", value: "rexton4wdd29"}]
                    },
                    "aut4x4": {
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
        console.log(value, 'family')
        setFamily(value);
        setTransmission("");
        setFuel("");
        setLine("");
    };

    const handleTransmissionChange = (value: string) => {
        console.log(value, 'transmission')
        setTransmission(value);
        setFuel("");
        setLine("");
    };

    const handleFuelChange = (value: string) => {
        console.log(value, 'fuel')
        setFuel(value);
        setLine("");
    };

    React.useEffect(() => {

    }, [brand, model, family, transmission, fuel, line])

    return (
        <div className="bg-[url('https://puntokoreano.com/images/filter_background.png')] w-full h-screen bg-center 2xl:bg-contain" >
            <div className="w-full sm:w-96 sm:mx-auto lg:w-[500px] 2xl:w-[600px] p-10">
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
                    <Button type="primary" className="mx-auto block">
                        Buscar
                    </Button>
                </Form>
            </div>

        </div>
    )
}
export default FilterStore;