//package org.firstservice.config;
//
//import javax.net.ssl.*;
//import java.security.SecureRandom;
//import java.security.cert.X509Certificate;
//
//public class SSLUtil {
//
//    public static void disableSSLVerification() {
//        try {
//            TrustManager[] trustAllCerts = new TrustManager[]{
//                    new X509TrustManager() {
//                        @Override
//                        public X509Certificate[] getAcceptedIssuers() {
//                            return new X509Certificate[0]; // Лучше вернуть пустой массив, чем null
//                        }
//
//                        @Override
//                        public void checkClientTrusted(X509Certificate[] certs, String authType) {
//                            // Метод не выполняет никаких действий
//                        }
//
//                        @Override
//                        public void checkServerTrusted(X509Certificate[] certs, String authType) {
//                            // Метод не выполняет никаких действий
//                        }
//                    }
//            };
//
//            SSLContext sc = SSLContext.getInstance("TLS"); // Используйте "TLS" вместо "SSL"
//            sc.init(null, trustAllCerts, new SecureRandom());
//            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//            HttpsURLConnection.setDefaultHostnameVerifier((HostnameVerifier) (hostname, session) -> true); // Игнорировать проверку имени хоста
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}
