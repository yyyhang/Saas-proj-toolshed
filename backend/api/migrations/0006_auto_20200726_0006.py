# Generated by Django 3.0 on 2020-07-26 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200725_1038'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogposttag',
            name='blog_post_id',
        ),
        migrations.AddField(
            model_name='blogpost',
            name='tags',
            field=models.ManyToManyField(related_name='blogpost_tag', to='api.BlogPostTag'),
        ),
    ]
