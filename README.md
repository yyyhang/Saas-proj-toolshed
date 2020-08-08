# toolshed


## COMP9323 20T2 Group 8

## Starting up the app
```bash
$ docker-compose up
```
## If you need to build fresh images, do this:
```bash
$ docker-compose up --build
```

## Running a database migration

A database migration will happen as soon as the app starts up using docker-compose.
To run your own after making changes to your model, do so like this:

```bash
$ docker-compose exec backend python manage.py makemigrations

$ docker-compose exec backend python manage.py migrate
```

# Connecting to the database as a human

```bash
$ docker-compose up
```

## See that it's running:
```bash
$ docker ps
```

## You'll be prompted for the password
```bash
$ psql -h 0.0.0.0 -p5432 -U app_user toolbox
```

## Accessing the Django admin panel
**Username:** admin

**Password:** password

## Creating a superuser account
```bash
$ python manage.py createsuperuser
```
___

## API Endpoints

### App Home Page
```
**GET /categories/explore**
```

```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    {
        "category": "Course Administration",
        "publishedcount": 4
    },
    {
        "category": "Communication",
        "publishedcount": 2
    },
    {
        "category": "MOOC Platform",
        "publishedcount": 1
    }
]
```

**GET /categories/**
```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    "Course Administration",
    "MOOC Platform",
    "Communication"
]
```

**GET /tags/popular/**
```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    {
        "tag": "security",
        "tagcount": 4
    },
    {
        "tag": "cloud",
        "tagcount": 4
    },
    {
        "tag": "aws",
        "tagcount": 3
    },
    {
        "tag": "azure",
        "tagcount": 2
    }
]
```




## Starting an elasticsearch
```bash
$ docker network create toolnet

$ docker run -d --name elasticsearch --net toolnet -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.8.0
```

Index a document into the customer index:
```bash
curl -X PUT "localhost:9200/customer/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
  "name": "John Doe"
}'
```

An example for inserting a knowledge base entry:
```bash
curl -X PUT "localhost:9200/tools/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
    "title": "Adding a password to your Zoom room",
    "content": "....",
    "type": "knowledge_base",
    "created_by": "",
    "tags": [
      "video",
      "communication"
    ],
    "like_count": "50"
}'
```


## Elasticsearch

### Elastic Toolshed
We're going to use a single ES index to store blog posts and knowledge base items.

### Facts:
```bash
index: knowledge_base
```

### Elastic Examples
```bash
curl -X GET "localhost:9200/tools/_doc/1?pretty"
```

Querying
```bash
curl -X GET "localhost:9200/bank/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": { "match_all": {} },
  "sort": [
    { "account_number": "asc" }
  ]
}
'
```


A fuzzy string search
```bash
curl -X GET "localhost:9200/bank/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": { "match": { "address": "mill lane" } }
}
'
```

Another fuzzy string search of the tool index:
```bash
curl -X GET "localhost:9200/tools/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "query": { "match": { "title": "password" } }
}
'
```




POST: blogs/

```request.data:

{
    user: '',
    title: '',
    content: '',
    tags: [
        'communication',
        'cool'
    ]
}

request.data.content -> JSON.load()
```