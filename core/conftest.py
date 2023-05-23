import pytest
import os

def pytest_configure():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')
    import django
    django.setup()
