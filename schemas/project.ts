export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name:'names',
            title: 'Names',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'year',
            title: "Year",
            type: 'string'
        },
        {
            name: 'description',
            title: "Description",
            type: 'string'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string'
        },
        {
            name:'type',
            title: 'Type',
            type: 'string'
        },
        {
            name:'videoSrc',
            title: 'Video Source',
            type: "file",
            options: {
                accept: 'video/*',
            },
        },
        {
            name:'thumbnail',
            title: "Thumbnail",
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'vimeo',
            title: 'Vimeo',
            type: 'string'
        },
        {
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of: [{ type: 'string' },
            ],
        },

    ],

}