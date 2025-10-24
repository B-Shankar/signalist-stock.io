declare module 'react-select-country-list' {
    export default function countryList(): {
        getData: () => { label: string; value: string }[];
        getValue: (label: string) => string;
        getLabel: (value: string) => string;
    };
}
