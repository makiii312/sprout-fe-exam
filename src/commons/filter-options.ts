export const FILTER_OPTIONS = {
    COMPANY: [
        {
            label: 'Sprout Solutions',
            value: 'sprout'
        },
        {
            label: 'Globe',
            value: 'globe'
        },
        {
            label: 'Cafe24 Philippines',
            value: 'cafe24'
        }
    ],
    DEPARTMENT: [
        {
            label: 'Product',
            value: 'product'
        },
        {
            label: 'Design',
            value: 'design'
        },
        {
            label: 'Development',
            value: 'development'
        }
    ],
    LOCATION: [
        {
            label: 'Manila',
            value: 'manila'
        },
        {
            label: 'Makati',
            value: 'makati'
        },
        {
            label: 'Pasig',
            value: 'pasig'
        }
    ],
    EMPLOYEE: [
        {
            label: 'John Doe 1',
            value: 'john-1'
        },
        {
            label: 'John Doe 2',
            value: 'john-2'
        },
        {
            label: 'John Doe 3',
            value: 'john-3'
        }
    ]
};

export enum FilterCategory {
    COMPANY = 'COMPANY',
    DEPARTMENT = 'DEPARTMENT',
    LOCATION = 'LOCATION',
    EMPLOYEE = 'EMPLOYEE',
} 

export type FilterData = {
    label: string;
    value: string;
};