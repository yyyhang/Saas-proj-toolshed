# Generated by Django 3.0 on 2020-07-22 11:05

from django.db import migrations
from ..models import BlogPost
from ..models import User

def add_blogposts(apps, schema_editor):
    user = User(first_name='Data Migration First Name',
                last_name='Data Migration Last Name')
    user.save()

    user = User(first_name='Pav',
                last_name='R')
    user.save()

    for i in range(10):
        title = "Cloud Security 1" + str(i)
        blogpost = BlogPost(title=title, created_by=user)
        blogpost.save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200722_1033'),
    ]

    operations = [
        migrations.RunPython(add_blogposts),
    ]
