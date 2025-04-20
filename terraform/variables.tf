variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "aws_region" {
  default = "ap-south-1"
}
variable "ami_id" {
  description = "Amazon Linux AMI ID"
}
variable "instance_type" {
  default = "t2.micro"
}
variable "key_name" {
  description = "EC2 Key Pair name"
}
variable "private_key_path" {
  description = "Path to your private key (PEM file)"
}
