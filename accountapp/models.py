from django.db import models
from django.utils import timezone
class Post(models.Model):
  # 생략
  image = models.ImageField(upload_to = "images/", null=True, blank=True)

  def __str__(self):
    return str(self.title)