FROM nginx:stable
ENV VFB_MAIN_SERVER=v2.virtualflybrain.org
ENV VFB_PDB_SERVER=pdb.virtualflybrain.org
ENV VFB_OWL_SERVER=owl.virtualflybrain.org
COPY html /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
RUN sed -i "s|VFB_MAIN_SERVER|${VFB_MAIN_SERVER}|g" /usr/share/nginx/html/index.html
RUN sed -i "s|VFB_PDB_SERVER|${VFB_PDB_SERVER}|g" /usr/share/nginx/html/conf/vfb.xmi
RUN sed -i "s|VFB_OWL_SERVER|${VFB_OWL_SERVER}|g" /usr/share/nginx/html/conf/vfb.xmi
