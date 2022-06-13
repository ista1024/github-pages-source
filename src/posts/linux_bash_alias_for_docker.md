---

title: "Linux bash alias for docker"
description: "Method to sort array"
date: "2022-04-12"

---

echo only docker container ID, Image, Status, Ports, Names

```bash
alias docker-ps-a='docker ps -a --format "table {{.ID}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}\t{{.Names}}"'
```
