export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd1a2eb288a5342da21f744',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nhqq32e9',
                  apiId: '83b4b066-0948-482a-a7dd-bab85274e484'
                },
                {
                  buildHookId: '5fd1a2eb53c4b25182e36477',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3c2tm1qw',
                  apiId: '4625aee9-d680-4a94-9b7d-0a2c73cf4606'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crew-guy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3c2tm1qw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
