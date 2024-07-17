from django.db import models

# Create your models here.

class Item(models.Model):
    # personal information
    surname = models.CharField(max_length=255, null=True)
    firstname = models.CharField(max_length=255, null=True)
    middlename = models.CharField(max_length=255, null=True)
    extension = models.CharField(max_length=255, null=True, blank=True)
    date_of_birth = models.DateField(null=True)
    place_of_birth = models.CharField(max_length=255, null=True)
    sex = models.CharField(max_length=255, null=True)
    civil_status = models.CharField(max_length=255, null=True)
    height = models.CharField(max_length=255, null=True)
    weight = models.CharField(max_length=255, null=True)
    blood_type = models.CharField(max_length=255, null=True)
    gsis = models.CharField(max_length=255, null=True, blank=True)
    pagibig = models.CharField(max_length=255, null=True, blank=True)
    philhealth = models.CharField(max_length=255, null=True, blank=True)
    sss = models.CharField(max_length=255, null=True, blank=True)
    tin = models.CharField(max_length=255, null=True, blank=True)
    agency_employee = models.CharField(max_length=255, null=True, blank=True)
    citizenship = models.CharField(max_length=255, null=True, blank=True)
    residential_address = models.CharField(max_length=255, null=True)
    residential_zipcode = models.CharField(max_length=255, null=True)
    permanent_address = models.CharField(max_length=255, null=True)
    permanent_zipcode = models.CharField(max_length=255, null=True)
    telephone = models.CharField(max_length=255, null=True)
    mobile = models.CharField(max_length=255, null=True)
    email = models.EmailField(max_length=255, null=True, blank=True)

    # family background
    spouse_firstname = models.CharField(max_length=255, null=True, blank=True)
    spouse_middlename = models.CharField(max_length=255, null=True, blank=True)
    spouse_surname = models.CharField(max_length=255, null=True, blank=True)
    spouse_extension = models.CharField(max_length=255, null=True, blank=True)
    occupation = models.CharField(max_length=255, null=True, blank=True)
    employer_name= models.CharField(max_length=255, null=True, blank=True)
    business_address = models.CharField(max_length=255, null=True, blank=True)
    business_telephone = models.CharField(max_length=255, null=True, blank=True)
    father_firstname = models.CharField(max_length=255, null=True, blank=True)
    father_middlename = models.CharField(max_length=255, null=True, blank=True)
    father_surname = models.CharField(max_length=255, null=True, blank=True)
    father_extension = models.CharField(max_length=255, null=True, blank=True)
    mother_firstname = models.CharField(max_length=255, null=True, blank=True)
    mother_middlename = models.CharField(max_length=255, null=True, blank=True)
    mother_surname = models.CharField(max_length=255, null=True, blank=True)
    mother_extension = models.CharField(max_length=255, null=True, blank=True)

    children1= models.CharField(max_length=255, null=True, blank=True)
    children1dob= models.CharField(max_length=255,null=True, blank=True)
    children2= models.CharField(max_length=255, null=True, blank=True)
    children2dob= models.CharField(max_length=255,null=True, blank=True)
    children3= models.CharField(max_length=255, null=True, blank=True)
    children3dob= models.CharField(max_length=255,null=True, blank=True)
    children4= models.CharField(max_length=255, null=True, blank=True)

    # educational background
    elementary_school = models.CharField(max_length=255, null=True, blank=True)

    secondary_school = models.CharField(max_length=255, null=True, blank=True)

    vocational_school = models.CharField(max_length=255, null=True, blank=True)

    college_school = models.CharField(max_length=255, null=True, blank=True)

    gs_school = models.CharField(max_length=255, null=True, blank=True)


    def __str__(self):
        return self.surname