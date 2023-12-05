export default function (plop) {
    plop.setGenerator('Create Day', {
        description: 'Creates folder and files for starting a Advent of Code day.',
        prompts: [{
            type: 'number',
            name: 'day',
            message: 'What day are you starting?'
        }],
        actions: [{
            type: 'add',
            path: 'src/day{{day}}/index.test.ts',
            templateFile: 'templates/test.hbs'
        }, {
            type: 'add',
            path: 'src/day{{day}}/index.ts',
            templateFile: 'templates/code.hbs'
        }, {
            type: 'add',
            path: 'src/day{{day}}/part1example.txt'
        }, {
            type: 'add',
            path: 'src/day{{day}}/part1.txt'
        }, {
            type: 'add',
            path: 'src/day{{day}}/part2example.txt'
        }, {
            type: 'add',
            path: 'src/day{{day}}/part2.txt'
        }]
    });
};