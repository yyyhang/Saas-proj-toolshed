# Generated by Django 3.0 on 2020-08-11 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20200810_1228'),
    ]

    operations = [
        migrations.AddField(
            model_name='knowledgebaseitem',
            name='likeCount',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]